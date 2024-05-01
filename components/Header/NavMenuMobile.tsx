import { DrupalMenu } from "@/types/drupal";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import Logo from "../Logo";
import SocialLinks from "../common/SocialLinks";
import { usePathname } from "next/navigation";

const MenuLink = ({
  label,
  href,
  onClick,
  path,
}: {
  label: string;
  href: string;
  onClick: () => void;
  path: string;
}) => {
  return (
    <Link
      className={clsx(
        "text-white hover:text-accent hover:bg-primary hover:shadow-xl pl-5 py-2 rounded-full ease-in-out duration-300 font-bold uppercase text-lg",
        path === href && "text-accent"
      )}
      href={href}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

const NavMenuMobile = ({ menu }: { menu: DrupalMenu }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
          <Logo onClick={() => setMenuOpen(false)} variant="primary" />
          <XMarkIcon
            className="text-white w-10 h-10"
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <div className="space-y-8">
          <ul className="space-y-1 mt-8 text-right">
            {menu.tree.map((item, index) => (
              <li key={index}>
                <MenuLink
                  label={item.title}
                  href={item.url}
                  onClick={() => setMenuOpen(false)}
                  path={pathname}
                />
              </li>
            ))}
            <li>
              <MenuLink
                label="Contacto"
                href="/contacto"
                onClick={() => setMenuOpen(false)}
                path={pathname}
              />
            </li>
          </ul>

          <div>
            <SocialLinks align="right" spacing="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenuMobile;
