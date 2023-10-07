import AllMovies from "@/components/AllMovies";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Explore Movies Here",
  description: "Find Latest Movies Here",
};

// const TMDB_Url = "https://api.themoviedb.org/3/";
// const TMDB_KEY = "abd8c1205b55fe67db01ed53f79e30f8";

const Movies = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <AllMovies />
    </div>
  );
};

export default Movies;
