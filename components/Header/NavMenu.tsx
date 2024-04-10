"use client";
import { DrupalMenu } from "@/types/drupal";
import { Popover } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";

interface NavMenuProps {
  menu: DrupalMenu;
  variant?: "header" | "footer";
}

const NavMenu = ({ menu, variant = "header" }: NavMenuProps) => {
  return (
    <nav className={variant === "header" ? "hidden lg:block" : ""}>
      <ul className="flex space-x-1 items-center">
        {menu.tree.map((item, index) => {
          return item.items.length > 0 ? (
            <li key={index}>
              <Popover className="relative">
                <Popover.Button
                  className={clsx(
                    "text-white hover:text-accent px-5 py-2 rounded-full ease-in-out duration-300 font-bold block",
                    variant === "header" && "hover:bg-primary hover:shadow-xl"
                  )}
                >
                  {item.title}
                </Popover.Button>
                <Popover.Panel className="absolute z-[9999] rounded-xl shadow-2xl border-primary border-4 bg-white outline-white mt-3 min-w-[30vw]">
                  <ul className="space-y-2">
                    {item.items.map((item, index) => (
                      <li key={index}>
                        <Popover.Button as={Link} href={item.url}>
                          <div className="hover:bg-primary hover:text-white p-3 duration-300 ease-in-out">
                            <div className="font-bold">{item.title}</div>
                            <div className="h-1 w-3/4 rounded-full bg-black"></div>
                            <div>{item.description}</div>
                          </div>
                        </Popover.Button>
                      </li>
                    ))}
                  </ul>
                </Popover.Panel>
              </Popover>
            </li>
          ) : (
            <li key={index}>
              <Link
                className={clsx(
                  "text-white hover:text-accent  px-5 py-2 rounded-full ease-in-out duration-300 font-bold",
                  variant === "header" && "hover:bg-primary hover:shadow-xl"
                )}
                href={item.url}
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
