"use client";
import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import MobileNavLink from "./MobileNavLink";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import LoginButton from "@/components/auth/login-button";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const callbackUrl = "/";
  return (
    <div>
      <nav
        className="text-2xl font-medium   absolute z-[900] top-0 right-5 cursor-pointer h-full flex place-items-center"
        aria-label="Ouvrir le menu"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </nav>

      {open && (
        <div className="fixed left-0 top-0 w-full h-screen origin-top bg-white text-black p-3">
          <div className=" h-screen flex place-items-center flex-col pt-20 pb-10 px-10">
            <div className=" h-full w-full space-y-8">
              <MobileNavLink
                href="/"
                title="Acceuil"
                onClick={() => setOpen(!open)}
              />

              <MobileNavLink
                href="/centres-formations"
                title="Centres de formation"
                onClick={() => setOpen(!open)}
              />

              <MobileNavLink
                href="/fonctionnalites"
                title="Fonctionnalités"
                onClick={() => setOpen(!open)}
              />

              <MobileNavLink
                href="/demander-une-demo"
                title="Demander une démo"
                onClick={() => setOpen(!open)}
              />
              <div className=" h-10">
                <div className=" bg-black h-[2px] my-20"></div>
              </div>
              {/* <div className=" h-[2px] my-20"></div> */}

              <div
                className={" h-16 mt-20 w-full"}
                onClick={() => setOpen(!open)}
              >
                {session ? (
                  <Button
                    className="h-full w-full  text-2xl"
                    size="lg"
                    onClick={() => signOut({ callbackUrl })}
                  >
                    Se déconnecter
                  </Button>
                ) : (
                  <LoginButton>
                    <Button
                      className="h-full w-full text-2xl border font-normal  border-black"
                      size="lg"
                    >
                      S&apos;authentifier
                    </Button>
                  </LoginButton>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
