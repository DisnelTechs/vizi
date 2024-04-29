import { DrupalMenu } from "@/types/drupal";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import Logo from "../Logo";
import SocialLinks from "../common/SocialLinks";

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
          "absolute bg-primary w-screen h-screen top-0 left-0 p-8",
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
        <ul className="space-y-1 mt-8 text-right">
          {menu.tree.map((item, index) => (
            <li key={index}>
              <Link
                className="text-white hover:text-accent hover:bg-primary hover:shadow-xl pl-5 py-2 rounded-full ease-in-out duration-300 font-bold uppercase text-lg"
                href={item.url}
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
          <div className="pt-8">
            <SocialLinks align="right" spacing="small" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavMenuMobile;
