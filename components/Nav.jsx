"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const listProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    listProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <img
          src="/assets/images/logo.png"
          alt="DevSparkShare Logo"
          className="object-contain rounded-lg"
          width={60}
          height={60}
        />
        <p className="logo_text">DevSparkShare</p>
      </Link>
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile" className="">
              <img
                src={
                  session?.user?.image
                    ? session.user.image
                    : "/assets/images/profile.png"
                }
                alt="Profile"
                width={37}
                height={37}
                className="rounded-full w-[37px] h-[37px] border-solid border-[1px] border-[#cdc8c8]"
              />
            </Link>
          </div>
        ) : (
          <>
            <Link href="/authenticate" className="black_btn">
              Sign In
            </Link>
          </>
        )}
      </div>
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <img
              src={
                session?.user?.image
                  ? session.user.image
                  : "/assets/images/profile.png"
              }
              alt="Profile"
              width={37}
              height={37}
              className="rounded-full w-[37px] h-[37px] border-solid border-[1px] border-[#cdc8c8]"
              onClick={() => setToggleDropDown((prevState) => !prevState)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                  className="black_btn mt-5 w-full"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link href="/authenticate" className="black_btn">
              Sign In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
