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
    <div>
      {data.session?.user ? (
        <div className="flex items-center gap-2">
          <p className="text-gray-100">😺 {data.session.user.email}</p>
          <button
            onClick={LogOut}
            className="text-white inline-flex items-center justify-center px-6 py-1 rounded-full border border-white border-opacity-25 bg-[#64AE9D] hover:bg-[#37bd9e] shadow-md"
          >
            log out
          </button>
        </div>
      ) : (
        <button
          onClick={() => router.push("/login")}
          className="text-white inline-flex items-center justify-center px-6 py-1 rounded-full border border-white border-opacity-25 bg-[#64AE9D] hover:bg-[#37bd9e] shadow-md"
        >
          login
        </button>
      )}
    </div>
  );
};

export default LogOut;
