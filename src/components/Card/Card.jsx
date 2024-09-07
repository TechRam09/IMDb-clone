// Card.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Card({ movie }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards mx-1">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={300} width={200} duration={3} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/movie/${movie.id}`}>
          <div
            className="cards inline-block relative transition-transform duration-[2000] overflow-hidden m-[0.19rem] rounded-[10px] h-[200px] lg:h-[300px] min-w-[200px] cursor-pointer z-0 hover:z-[1000] hover:scale-[1.2]"
            style={{ border: "1px solid rgb(99, 99, 99)" }}
          >
            <img
              className="h-full w-full object-fill lg:object-cover"
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
              alt="poster"
            />
            <div
              className="card_overlay absolute bottom-0 px-4 pb-4 h-[290px] w-full flex flex-col justify-end opacity-0 transition-opacity hover:opacity-100 duration-[2000]"
              style={{
                backgroundImage: "linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1))",
              }}
            >
              <div className="font-black text-base mb-[0.4rem]">
                {movie ? movie.original_title : ""}
              </div>
              <div className="cards_runtime mb-1 text-xs">
                {movie ? movie.release_date : ""}
                <span className="card_rating float-right">
                  {movie ? movie.vote_average.toFixed(2) : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card_description mb-1 text-xs italic">
                {movie ? movie.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default Card;
