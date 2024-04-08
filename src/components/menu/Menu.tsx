"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import "./styles.css";
import { MenuIcon, X } from "lucide-react";

const links = ["about", "portfolio", "services", "contact"];

const Menu = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isOpen = isMenuOpen ? "open" : "";

  const onClick = (href: string) => {
    toggleMenu();
    router.push(href);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className=" fixed top-9 right-0 z-[1000] p-4 m-4 rounded-full focus:outline-none "
      >
        {isMenuOpen ? (
          <X color="#000000" size={50} strokeWidth={1} />
        ) : (
          <MenuIcon color="#000000" size={50} strokeWidth={1} />
        )}
      </button>
      {/* rounded-[50%]top-0 right-0  aspect-square*/}
      <div
        className={`background bg-white transition-all duration-700 w-full ${
          isOpen ? "h-[300vh]" : "h-[88px]"
        } fixed z-[400] rounded-b-[50%]`}
      ></div>
      <div
        className={`fixed top-0 left-0  z-[450] w-full h-full flex items-center justify-center   ${
          isOpen ? "visible opacity-1" : "invisible opacity-0"
        }`}
      >
        <nav className="flex flex-col justify-center items-start gap-8 ">
          {links.map((link, index) => (
            <Link
              href={`/${link}`}
              key={link}
              className={`text-4xl font-semibold capitalize transition-all duration-300   ${
                isMenuOpen ? "appear" : ""
              }`}
              style={{ animationDelay: `0.${index + 1}s` }}
              onClick={() => onClick(link)}
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Menu;
