import { DrupalMenu } from "@/types/drupal";
import Link from "next/link";

const NavMenu = ({ menu }: { menu: DrupalMenu }) => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex space-x-1">
        {menu.tree.map((item, index) => (
          <li key={index}>
            <Link
              className="text-white hover:text-accent hover:bg-primary hover:shadow-xl px-5 py-2 rounded-full ease-in-out duration-300 font-bold"
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
