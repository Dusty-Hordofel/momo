import { BurgerMenuIcon } from "@/assets/icons";
import React from "react";

const BurgerMenu = () => {
  return (
    <>
      <div className="navlink">
        <BurgerMenuIcon />
        <div className="pl-4 hidden xl:flex">
          <span>Plus</span>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
