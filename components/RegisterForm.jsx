"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import PictureUploader from "./PictureUploader";
import { userModel } from "@constants/baseObjects";
import { AppConstants } from "@constants/appConstants";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [error, setError] = useState("");
  const formRef = useRef();
  const [userData, setUserData] = useState(userModel);
  const router = useRouter();

  const onImageSelected = async (_newImage) => {
    setUserData((prevData) => ({
      ...prevData,
      picture: _newImage.url,
      image: _newImage.image,
    }));
  };

  const handleData = (value, target) => {
    setUserData((prevData) => ({ ...prevData, [target]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (error) {
        return;
      }

      const _duplicate = await fetch(AppConstants.APP_URL + "api/check_duplicates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userData.email }),
      });

      const { user } = await _duplicate.json();

      if(user){
        setError("Email in use, try Login");
        setTimeout(() => {
          setError("");
        }, 2000);
      }

      if (userData.image) {
        let fileName = userData.email.split(".")[0] + ".png";
        fileName = fileName.replace("@", "_");

        const uploadImage = await fetch(AppConstants.APP_URL + "api/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ blobFile: userData.image, fileName }),
        });
        if (uploadImage.ok) {
          userData.picture = AppConstants.APP_URL + "uploads/" + fileName;
        } else {
          userData.picture = null;
        }
      }

      userData.image = null;
      const res = await fetch(AppConstants.APP_URL + "api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...userData }),
      });

      if (res.ok) {
        if (formRef.current) {
          formRef.current.reset();
        }
        setUserData(userModel);
        router.push('/');
      } else {
        console.log("User Registration Failed");
      }
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const comparePassword = (e) => {
    if (userData.password === e.target.value) {
      if (formRef.current) {
        formRef.current.valid = true;
      }
      setError("");
    } else {
      if (formRef.current) {
        formRef.current.valid = false;
      }
      setError("Password miss match");
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400 bg-white sm:w-auto w-full mt-8">
        <h1 className="text-xl font-bold my-4">Enter your credentials</h1>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="flex flex-col gap-3 relative z-50"
        >
          <input
            type="text"
            className=""
            placeholder="Name..."
            autoComplete="Name"
            required
            onChange={(e) => handleData(e.target.value, "name")}
          />
          <input
            type="email"
            className=""
            placeholder="Email..."
            autoComplete="Email"
            required
            onChange={(e) => handleData(e.target.value, "email")}
          />
          <input
            type="password"
            className=""
            placeholder="Password..."
            autoComplete="Password"
            required
            onChange={(e) => handleData(e.target.value, "password")}
          />
          <input
            type="password"
            className=""
            placeholder="Retype Password..."
            required
            onChange={comparePassword}
          />
          <PictureUploader
            image={userData.picture}
            onChange={onImageSelected}
          />
          <button
            type="submit"
            className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 rounded-lg hover:shadow-lg transitions"
          >
            Submit
          </button>
          {error ? (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          ) : (
            <></>
          )}
          <Link href={"/authenticate"} className="text-sm mt-3 text-right">
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
