"use client";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { usePathname } from "next/navigation";
import LoginButton from "../auth/login-button";
import { Button } from "../ui/button";
import NavLink from "./NavLink";
import { useCurrentUserRole } from "@/hooks/use-current-user-role";
import { useCurrentUser } from "@/hooks/use-current-user";

const NavLinks = () => {
  const callbackUrl = "/";
  // searchParams.get("callbackUrl") ||

  const { data: session } = useSession();
  // console.log("🚀 ~ NavList ~ data:", session);

  const [providers, setProviders] = useState(null);

  const pathname = usePathname();
  console.log("🚀 ~ NavLinks ~ pathname:", pathname);

  const role = useCurrentUserRole();
  console.log("🚀 ~ file: Navbar.tsx ~ role", role);
  const user = useCurrentUser();
  console.log("🚀 ~ Navbar ~ user:", user);

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
      {/* // !["/dashboard/user/files"].includes(pathname) */}
      {!user && !role && (
        <>
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
        </>
      )}
      {user && role === "user" && (
        <ul
          aria-label="submenu"
          className="flex h-full place-items-center gap-x-5"
        >
          {" "}
          <li className="hover:bg-gray-200 rounded-md py-3 px-8 border-black border">
            <NavLink
              href={`/dashboard/${role}/files`}
              title="Mon espace"
              className="text-lg"
            />
          </li>
        </ul>
      )}
      <div className=" h-full place-items-center flex">
        {session ? (
          <Button
            className="h-full text-lg border font-normal text-white  hover:bg-black bg-black hover:bg-black/80 border-black"
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
