"use client";

import { DrupalMenu } from "@/types/drupal";
import Link from "next/link";
import Logo from "../Logo";
import NavMenu from "./NavMenu";
import NavMenuMobile from "./NavMenuMobile";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = ({ menu }: { menu: DrupalMenu }) => {
  const { scrollYProgress } = useScroll();
  const [bg, setBg] = useState("transparent");

  useEffect(() => {
    return scrollYProgress.on("change", (current) => {
      if (scrollYProgress.get() > 0.2) {
        setBg("black");
      } else {
        setBg("transparent");
      }
    });
  }, [scrollYProgress]);
  return (
    <header
      className={clsx(
        "fixed w-full mx-auto z-50 flex justify-between px-4 py-3 lg:px-[10%] items-center",
        `bg-${bg} bg-opacity-70`,
        bg === "white" && "shadow-2xl",
      )}
    >
      <Logo />
      <NavMenu menu={menu} />
      <Link href={`/contacto`} className="hidden lg:block">
        <div className="bg-primary hover:bg-secondary hover:ring-2 ring-white duration-300 ease-in-out text-accent hover:text-white font-bold rounded-full px-6 py-3">
          Contacto
        </div>
      </Link>
      <NavMenuMobile menu={menu} />
    </header>
  );
};

export default Header;
