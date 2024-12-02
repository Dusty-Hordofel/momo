"use client";
import React from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import NavLinks from "./NavLinks";
import MobileMenu from "@/components/navbar/MobileMenu";
import { usePathname } from "next/navigation";
import { disableNavAndFooter } from "@/app/disableNavAndFooter";
import { useCurrentUserRole } from "@/hooks/useCurrentUserRole.hooks";
import { useCurrentUser } from "@/hooks/useCurrentUser.hooks";

const Navbar = () => {
  const pathname = usePathname();
  const role = useCurrentUserRole();
  // console.log("🚀 ~ file: Navbar.tsx ~ role", role);
  const user = useCurrentUser();
  // console.log("🚀 ~ Navbar ~ user:", user);

  return (
    <>
      {!disableNavAndFooter.includes(pathname) && (
        <>
          <header className="fixed top-0 inset-x-0 min-h-20 overflow-hidden bg-white z-[1000]">
            <div className="font-bold text-5xl my-5 py-5 max-sm:text-3xl max-[355px]:text-2xl bg-black text-white">
              <p className="text-center">PROJECT IN PROGRESS</p>
            </div>
            <div className="flex  justify-between  h-full py-3  w-[97.5%] mx-auto">
              {/* left part */}
              <div className=" flex gap-x-5">
                <div className="relative ">
                  <Logo />
                </div>
                {
                  // !["/dashboard/user/files"].includes(pathname)
                  !user && !role && (
                    <ul className=" h-full  min-[1160px]:place-items-center  min-[1160px]:gap-x-5 hidden  min-[1160px]:flex">
                      <li className=" hover:bg-gray-200 hover:rounded py-4 px-8 ">
                        <NavLink
                          href="centres-formations"
                          className="text-lg"
                          // className="bg-red-500"
                          title="Centres de formation"
                        />
                      </li>
                    </ul>
                  )
                }
              </div>

              {/* right part */}
              <div className="min-[1160px]:block hidden">
                <NavLinks />
              </div>

              {/* Mobile Menu */}
              <div className="min-[1160px]:hidden relative ">
                <MobileMenu />
              </div>
            </div>
          </header>
          <div className="h-20 w-full bg-white"></div>
        </>
      )}
    </>
  );
};

export default Navbar;
