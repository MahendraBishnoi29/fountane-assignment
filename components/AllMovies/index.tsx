"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MovieCard from "../MovieCard";
import ClientNav from "../Navbar/ClientNav";

const AllMovies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=abd8c1205b55fe67db01ed53f79e30f8&language=en-US"
      );
      return res.data?.results;
    },
  });

  return (
    <section className="flex flex-col items-center gap-10">
      <ClientNav />
      {isLoading ? (
        <h2 className="text-white">Loading Moviess.......</h2>
      ) : (
        <div className="flex flex-wrap">
          {data?.map((m: any) => (
            <MovieCard key={m?.id} movie={m} />
          ))}
        </div>
      )}
    </section>
  );
};

export default AllMovies;
