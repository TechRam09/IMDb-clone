import React, { useEffect } from "react";
import { useDataContext } from "../../context/dataContext";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function Home() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { popular, setPopular } = useDataContext();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPopular(data.results);
      });
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          transitionTime={3}
        >
          {popular.map((movie) => (
            <Link
              key={movie.id}
              className="text-white"
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage h-[600px]">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }}`}
                  alt="movie_image"
                  className=" m-auto w-full block"
                />
              </div>
              <div className="posterImage_overlay absolute bottom-0 p-20 h-[70%] flex flex-col items-start justify-end w-full opacity-100 hover:opacity-100">
                <div className="posterImage_title font-black text-7xl mb-2 text-left">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage_runtime text-3xl mb-4">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating ml-4">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="postImage_description text-left w-1/2 italic mb-1 text-[1rem]">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Home;
