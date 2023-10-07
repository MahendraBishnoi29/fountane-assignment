import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getUser();

  return (
    <main className="">
      <Navbar />
      <Hero />
    </main>
  );
}
