"use client";
import Link from "next/link";
import { SVGProps } from "react";

type instagramLinks = {
  href: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
  hideOnMobile?: boolean;
};

const NavLinks: React.FC<{
  instagramLinks: Record<string, instagramLinks>;
}> = ({ instagramLinks }) => {
  //   const pathname = usePathname();
  //   ${
  //     pathname === href ? "bg-red-800/50" : ""
  // console.log(href === pathname);
  //   }
  return (
    <>
      {Object.entries(instagramLinks).map(([key, { href, icon: Icon }]) => (
        <Link key={key} href={href} className="navlink">
          <Icon />
          <span className="pl-4 hidden xl:flex">{key}</span>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
