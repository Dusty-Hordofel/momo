import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div
      className="flex items-center h-full"
      aria-label="Cliquez sur le logo pour vous rendre sur la page d'accueil"
      tabIndex={0}
    >
      <Link href="/" className="text-2xl font-extrabold">
        ESRP Pour Tous
      </Link>
    </div>
  );
};

export default Logo;
