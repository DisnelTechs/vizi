import { DrupalMenu } from "@/types/drupal";
import Link from "next/link";
import Logo from "../Logo";

const Header = ({ menu }: { menu: DrupalMenu }) => {
  return (
    <header className="fixed w-full  mx-auto   z-50 flex justify-between py-5 lg:px-[10%] items-center">
      <Logo />
      <nav>
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

      <Link href={`/contacto`}>
        <div className="bg-indigo-800 hover:bg-indigo-600 hover:ring-2 ring-white duration-300 ease-in-out text-white font-bold rounded-full px-6 py-3">
          Contacto
        </div>
      </Link>
    </header>
  );
};

export default Header;
