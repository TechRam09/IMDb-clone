import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../../context/dataContext";
import Card from "../Card/Card";

function MovieList() {
  const { movieList, setMovieList } = useDataContext();
  const { type } = useParams();
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.error("Fetching error: ", error));
  };

  return (
    <div className="movie_list pt-0 pb-12 pl-12 pr-12">
      <h2 className="list_title text-3xl leading-10">
        {(type ? type : "popular").toUpperCase()}
      </h2>
      <div className="list_cards flex flex-wrap justify-center">
        {movieList.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
