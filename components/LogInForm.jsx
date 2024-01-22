"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogInForm = () => {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleCredentials = (value, target) => {
    setCredentials((prevData) => ({ ...prevData, [target]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email: credentials.email,
        password: credentials.password,
        redirect: false
      });

      console.log(res);

      if(res.error){
        setError("Invalid credentials");
        setTimeout(() => {
          setError('');
        }, 2000);
      }else{
        router.replace('/');
      }
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400 bg-white sm:w-auto w-full">
        <h1 className="text-xl font-bold my-4">Enter your credentials</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 relative z-50"
        >
          <input
            type="email"
            className=""
            placeholder="Email..."
            autoComplete="Email"
            required
            onChange={(e) => handleCredentials(e.target.value, "email")}
          />
          <input
            type="password"
            className=""
            placeholder="Password..."
            autoComplete="Password"
            required
            onChange={(e) => handleCredentials(e.target.value, "password")}
          />
          <button
            type="submit"
            className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 rounded-lg hover:shadow-lg transitions"
          >
            Login
          </button>
          {error ? (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          ) : (
            <></>
          )}
          <Link
            href={"/authenticate/register"}
            className="text-sm mt-3 text-right"
          >
            Don't have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LogInForm;
