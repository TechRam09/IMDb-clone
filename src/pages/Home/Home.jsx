import React, { useEffect } from "react";
import { useDataContext } from "../../context/dataContext";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/MovieList";

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
      })
      .catch((error) => console.error("Fetching error: ", error));
  }, [apiKey, setPopular]); // Ensure dependencies are correct

  return (
    <>
      <div className="poster">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          transitionTime={40}
          swipeable={true}
          emulateTouch={true}
        >
          {popular.map((movie) => (
            <Link
              key={movie.id}
              className="text-white"
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage lg:h-[600px]">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }}`}
                  alt="movie_image"
                  className="m-auto w-full h-[400px] md:h-[600px] lg:h-auto object-cover block"
                />
              </div>
              <div className="posterImage_overlay absolute bottom-0 p-4 lg:p-20 h-[60%] md:h-[70%] w-full flex flex-col items-start justify-end bg-gradient-to-t from-black to-transparent">
                <div className="posterImage_title font-bold text-[1.25rem] leading-6 md:text-5xl lg:text-7xl mb-1 md:mb-2 text-left">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage_runtime  text-[0.5rem]   md:text-2xl lg:text-3xl mb-2 md:mb-4">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating ml-2 md:ml-4">
                    {movie ? movie.vote_average.toFixed(2) : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="postImage_description text-left w-full md:w-1/2 italic mb-1 text-[0.5rem] leading-4 md:text-sm lg:text-base">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
      <MovieList />
    </>
  );
}

export default Home;
