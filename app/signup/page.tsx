"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RegisterType, registerSchema } from "@/validations/authSchema";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";

type Props = {};

const SignUp = (props: Props) => {
  const [loading, setLoading] = useState(false);

  const supabase = createClientComponentClient();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (payload: RegisterType) => {
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: payload.email,
      password: payload.password,
    });

    setLoading(false);

    if (error) {
      window.alert(error?.message);
    } else if (data.user) {
      await supabase.auth.signInWithPassword({
        email: payload.email,
        password: payload.password,
      });
      router.refresh();
      router.push("/login");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email Address"
            {...register("email")}
          />
          <span className="text-red-400">{errors?.email?.message}</span>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <span className="text-red-400">{errors?.password?.message}</span>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          <span className="text-red-400">
            {errors?.confirmPassword?.message}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <button
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit(onSubmit)}
          >
            {loading ? "processing" : "Sign Up"}
          </button>
          <Link href="/login">already have an account?</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
