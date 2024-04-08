"use client";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { usePathname } from "next/navigation";
import LoginButton from "../auth/login-button";
import { Button } from "../ui/button";
import NavLink from "./NavLink";

const NavLinks = () => {
  const callbackUrl = "/";
  // searchParams.get("callbackUrl") ||

  const { data: session } = useSession();
  // console.log("🚀 ~ NavList ~ data:", session);

  const [providers, setProviders] = useState(null);

  const pathname = usePathname();

  useEffect(() => {
    const setAuthProviders = async () => {
      const res: any = await getProviders();
      // console.log("🚀 ~ setAuthProviders ~ res:", res);
      setProviders(res);
    };

    setAuthProviders();
  }, []);

  return (
    <nav className="flex h-full  place-items-center gap-x-5">
      {/* Menu pour la version desktop */}
      <ul
        aria-label="submenu"
        className="flex h-full place-items-center gap-x-5"
      >
        <li className=" hover:bg-gray-200 hover:rounded-md py-4 px-8">
          <NavLink
            href="/Fonctionnalites"
            title="Fonctionnalités"
            className="text-lg"
          />
        </li>
        <li className="hover:bg-gray-200 hover:rounded-md py-4 px-8 ">
          <NavLink href="/" title="Demander une démo" className="text-lg" />
        </li>
      </ul>
      <div className=" lg:flex hidden w-[1px] bg-black h-full"></div>

      <div className=" h-full place-items-center flex">
        {session ? (
          <Button
            className="h-full text-lg"
            size="lg"
            onClick={() => signOut({ callbackUrl })}
          >
            Se déconnecter
          </Button>
        ) : (
          <LoginButton>
            <Button
              className="h-full text-lg border font-normal text-black hover:text-white  hover:bg-black bg-white border-black"
              size="lg"
            >
              S&apos;authentifier
            </Button>
          </LoginButton>
        )}
      </div>
    </nav>
  );
};

export default NavLinks;
