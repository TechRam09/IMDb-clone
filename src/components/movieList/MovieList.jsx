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
      .then((data) => setMovieList(data));
  };

  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "popular").toUpperCase()}</h2>
      <div className="list_cards">
        {movieList.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
