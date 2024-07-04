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

  return (
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            movieDetail ? movieDetail.backdrop_path : ""
          }`}
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster w-[500px]"
              src={`https://image.tmdb.org/t/p/original${
                movieDetail ? movieDetail.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop mt-6">
            <div className="movie__name">
              {movieDetail ? movieDetail.original_title : ""}
            </div>
            <div className="movie__tagline">
              {movieDetail ? movieDetail.tagline : ""}
            </div>
            <div className="movie__rating">
              {movieDetail ? movieDetail.vote_average : ""}{" "}
              <i className="fas fa-star" />
              <span className="movie__voteCount">
                {movieDetail ? "(" + movieDetail.vote_count + ") votes" : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {movieDetail ? movieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {movieDetail ? "Release date: " + movieDetail.release_date : ""}
            </div>
            <div className="movie__genres">
              {movieDetail && movieDetail.genres
                ? movieDetail.genres.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{movieDetail ? movieDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="movie__links">
        <div className="movie__heading">Useful Links</div>
        {movieDetail && movieDetail.homepage && (
          <a
            href={movieDetail.homepage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__homeButton movie__Button">
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {movieDetail && movieDetail.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + movieDetail.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__imdbButton movie__Button">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>
      <div className="movie__heading">Production companies</div>
      <div className="movie__production">
        {movieDetail &&
          movieDetail.production_companies &&
          movieDetail.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="productionCompanyImage">
                  <img
                    className="movie__productionComapany bg-white"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </>
          ))}
      </div>
    </div>
  );
}

export default MovieDetail;
