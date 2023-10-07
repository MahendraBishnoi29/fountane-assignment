"use client";

import Link from "next/link";

type Props = {};

const ClientNav = (props: Props) => {
  return (
    <nav className="mx-10 md:mx-56 bg-[rgb(8,8,8)] rounded-[100px] px-10 py-3 mt-3 border border-gray-400 overflow-hidden">
      <div className="flex items-center justify-between">
        {/* Middle Links */}
        <div className="hidden md:flex space-x-4">
          <Link className="text-gray-50 hover:text-gray-100" href="/">
            home
          </Link>

          <div
            className="text-gray-50 hover:text-gray-100 cursor-pointer"
            onClick={() =>
              window.open(
                "https://github.com/MahendraBishnoi29/fountane-assignment",
                "_blank"
              )
            }
          >
            github
          </div>

          <Link className="text-gray-50 hover:text-gray-100" href="/movies">
            movies
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ClientNav;
