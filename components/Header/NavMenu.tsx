import { DrupalMenu } from "@/types/drupal";
import clsx from "clsx";
import Link from "next/link";

interface NavMenuProps {
  menu: DrupalMenu;
  variant?: "header" | "footer";
}

const NavMenu = ({ menu, variant = "header" }: NavMenuProps) => {
  return (
    <nav className={variant === "header" ? "hidden lg:block" : ""}>
      <ul className="flex space-x-1">
        {menu.tree.map((item, index) => (
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
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
