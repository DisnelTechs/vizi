import { DrupalMenu } from "@/types/drupal";
import Link from "next/link";

const NavMenu = ({ menu }: { menu: DrupalMenu }) => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex">
        {menu.tree.map((item, index) => (
          <li key={index}>
            <Link
              className="text-gray-200 hover:text-white hover:bg-indigo-800 px-5 py-2 rounded-full ease-in-out duration-300 font-bold"
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
