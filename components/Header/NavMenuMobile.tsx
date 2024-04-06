"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { useState } from "react";
import Logo from "../Logo";
import { DrupalMenu } from "@/types/drupal";
import Link from "next/link";

const NavMenuMobile = ({ menu }: { menu: DrupalMenu }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <Bars3Icon
        className="text-white w-10 h-10"
        onClick={() => setMenuOpen(true)}
      />

      <div
        className={clsx(
          "absolute bg-primary w-full h-screen top-0 left-0 p-5",
          menuOpen ? "block" : "hidden"
        )}
      >
        <div className="flex justify-between items-center">
          <Logo onClick={() => setMenuOpen(false)} />
          <XMarkIcon
            className="text-white w-10 h-10"
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <ul className="space-y-2 mt-5">
          {menu.tree.map((item, index) => (
            <li key={index}>
              <Link
                className="text-white hover:text-accent hover:bg-primary hover:shadow-xl px-5 py-2 rounded-full ease-in-out duration-300 font-bold uppercase text-lg"
                href={item.url}
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMenuMobile;
