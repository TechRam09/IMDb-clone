import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../../context/dataContext";

function MovieList() {
  const { movieList, setMovieList } = useDataContext();
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, [type]);

  return <div>MovieList</div>;
}

export default MovieList;
