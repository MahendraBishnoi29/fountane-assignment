"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import MovieCard from "../MovieCard";
import ClientNav from "../Navbar/ClientNav";

type Props = {};

// Create a client
const queryClient = new QueryClient();

const AllMovies = (props: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=abd8c1205b55fe67db01ed53f79e30f8&language=en-US"
      );
      return res.data?.results;
    },
  });

  // const url =
  //   "https://api.themoviedb.org/3/movie/top_rated?api_key=abd8c1205b55fe67db01ed53f79e30f8&language=en-US";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmQ4YzEyMDViNTVmZTY3ZGIwMWVkNTNmNzllMzBmOCIsInN1YiI6IjYzYWJiNTJmMWY3NDhiMDA4MjM2NmRmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.raEDYb8RdkxhyNAAu2DuvIeEgePfaE3Ore1ygKb6AaU",
  //   },
  // };

  // useEffect(() => {
  //   fetch(url, options)
  //     .then((res) => res.json())
  //     .then((json) => setMoviesData(json?.results))
  //     .catch((err) => console.error("error:" + err));
  // }, []);

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
