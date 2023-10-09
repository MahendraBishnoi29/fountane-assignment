/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  movie: any;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="bg-slate-900 rounded-lg shadow-md p-4">
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie.original_title}
          className="w-full rounded-lg mb-2"
          // height={10}
          // width={10}
        />
        <h3 className="text-lg text-white font-semibold">
          {movie?.original_title}
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
