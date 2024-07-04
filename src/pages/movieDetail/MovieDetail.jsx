import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movie.css";

function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState();
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        id ? id : ""
      }?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovieDetail(data);
      })
      .catch((error) => console.log(error));
  };

  return <h2>s</h2>;
}

export default MovieDetail;
