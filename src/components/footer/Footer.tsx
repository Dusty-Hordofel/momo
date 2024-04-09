"use client";
import { disableNavAndFooter } from "@/app/disableNavAndFooter";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="mt-40">
      {!disableNavAndFooter.includes(pathname) && (
        <div className="flex gap-10 border-t-[1px] border-black  h-max py-5 pr-5 z-50 bg-white justify-center max-lg:flex-col place-items-center">
          <p>
            © {new Date().getFullYear()} ESRP Pour Tous. Tous droits réservés.
          </p>
          <ul className="flex gap-5 max-md:flex-col">
            <li className="underline">
              <Link href="/politique-de-confidentialite">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/conditions-utilisation">
                Conditions d&rsquo;utilisation
              </Link>
            </li>
            <li>
              <Link href="/cookies">Paramètres des cookies</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Footer;
