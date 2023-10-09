"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React from "react";

const LogOut = ({ data }: any) => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const LogOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="z-50">
      {data.session?.user ? (
        <div className="flex items-center gap-2">
          <p className="text-gray-100">😺 {data.session.user.email}</p>
          <button
            onClick={LogOut}
            className="bg-[#64AE9D] text-black font-semibold py-2 px-4 rounded-full shadow-[0px_2px_2px_rgba(255,255,255,0.48)_inset]"
          >
            log out
          </button>
        </div>
      ) : (
        <button
          onClick={() => router.push("/login")}
          className="bg-[#64AE9D] cursor-pointer text-black font-semibold py-2 px-4 rounded-full shadow-[0px_2px_2px_rgba(255,255,255,0.48)_inset]"
        >
          login
        </button>
      )}
    </div>
  );
};

export default LogOut;
