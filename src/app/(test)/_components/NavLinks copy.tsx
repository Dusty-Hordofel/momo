"use client";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
// import { LucideIcon } from "lucide-react";
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
        <Link
          key={key}
          href={href}
          //   transition-colors hover:bg-accent
          //   className={`md:flex rounded-md w-full my-[2px] p-3 h-12 justify-start items-center  hover:text-accent-foreground hover:bg-gray-400/10 cursor-pointer `}
          className="navlink"
        >
          <Icon />
          <span className="pl-4 hidden xl:flex">{key}</span>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
