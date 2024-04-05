import { DrupalMenu } from "@/types/drupal";
import Link from "next/link";
import Logo from "../Logo";
import NavMenu from "./NavMenu";
import NavMenuMobile from "./NavMenuMobile";

const Header = ({ menu }: { menu: DrupalMenu }) => {
  return (
    <header className="fixed w-full mx-auto z-50 flex justify-between py-5 px-4 lg:px-[10%] items-center">
      <Logo />
      <NavMenu menu={menu} />
      <Link href={`/contacto`} className="hidden lg:block">
        <div className="bg-indigo-800 hover:bg-indigo-600 hover:ring-2 ring-white duration-300 ease-in-out text-white font-bold rounded-full px-6 py-3">
          Contacto
        </div>
      </Link>
      <NavMenuMobile />
    </header>
  );
};

export default Header;
