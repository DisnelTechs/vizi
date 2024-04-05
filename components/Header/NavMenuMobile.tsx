"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { useState } from "react";
import Logo from "../Logo";

const NavMenuMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <Bars3Icon
        className="text-white w-10 h-10"
        onClick={() => setMenuOpen(true)}
      />

      <div
        className={clsx(
          "absolute bg-indigo-700 w-full h-screen top-0 left-0 p-5",
          menuOpen ? "block" : "hidden"
        )}
      >
        <div className="flex justify-between items-center">
          <Logo />
          <XMarkIcon
            className="text-white w-10 h-10"
            onClick={() => setMenuOpen(false)}
          />
        </div>
        
      </div>
    </div>
  );
};

export default NavMenuMobile;
