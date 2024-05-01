"use client";
import { DrupalMenu } from "@/types/drupal";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavMenuProps {
  menu: DrupalMenu;
  variant?: "header" | "footer";
}

const NavMenu = ({ menu, variant = "header" }: NavMenuProps) => {
  const pathname = usePathname();

  return (
    <nav className={variant === "header" ? "hidden lg:block" : ""}>
      <ul
        className={clsx(
          variant === "header"
            ? "flex space-x-1 items-center"
            : "grid grid-cols-2 justify-center justify-items-center lg:flex lg:space-x-1 lg:items-center"
        )}
      >
        {menu.tree.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={item.url}
                className={clsx(
                  "text-white hover:text-accent px-5 py-2 rounded-full ease-in-out duration-300 font-bold block",
                  variant === "header" && "hover:bg-primary hover:shadow-xl",
                  pathname === item.url && "text-accent"
                )}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;
