"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { DiVim } from "react-icons/di";

const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged in");
        router.refresh();
        router.push("/");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="max-w-md w-full px-6 py-8 bg-neutral-800 text-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-6">Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className={` ${
                errors.email ? "border-rose-500" : "border-neutral-300"
              } ${
                errors.email ? "focus:border-rose-500" : "focus:border-black"
              } w-full px-4 py-2 border-2 border-gray-300 text-black rounded-md focus:outline-none focus:ring-1 focus:ring-white`}
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className={` ${
                errors.password ? "border-rose-500" : "border-neutral-300"
              } ${
                errors.password ? "focus:border-rose-500" : "focus:border-black"
              } w-full px-4 py-2 border-2 border-gray-300 text-black rounded-md focus:outline-none focus:ring-1 focus:ring-white`}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white font-bold rounded-md hover:bg-neutral-600 transition "
            >
              {isLoading ? "Wait ..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
