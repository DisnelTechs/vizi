"use client";

import { DrupalMenu } from "@/types/drupal";
import Link from "next/link";
import Logo from "../Logo";
import NavMenu from "./NavMenu";
import NavMenuMobile from "./NavMenuMobile";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";
import ContactButton from "../common/ContactButton";

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
        "fixed w-full mx-auto z-50 flex justify-between px-8 py-8 lg:px-[10%] items-center",
        `bg-${bg} bg-opacity-70`,
        bg === "white" && "shadow-2xl"
      )}
    >
      <Logo />
      <NavMenu menu={menu} />
      <div className="hidden lg:block">
        <ContactButton />
      </div>
      <NavMenuMobile menu={menu} />
    </header>
  );
};

export default Header;
