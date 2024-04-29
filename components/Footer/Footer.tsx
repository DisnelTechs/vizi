import { DrupalMenu } from "@/types/drupal";
import Link from "next/link";
import {
  FaPhone
} from "react-icons/fa";
import { FaAt } from "react-icons/fa6";
import NavMenu from "../Header/NavMenu";
import SocialLinks from "../common/SocialLinks";

const ContactButton = ({
  type = "email",
  label,
}: {
  type?: "email" | "phone";
  label: string;
}) => {
  const Icon = type === "email" ? FaAt : FaPhone;
  return (
    <Link href={`${type === "email" ? "mailto:" : "tel:"}${label}`}>
      <div className="flex space-x-2 items-center hover:text-accent duration-300 ease-in-out font-bold">
        <Icon className="w-5 h-5" />
        <div>{label}</div>
      </div>
    </Link>
  );
};

const Footer = ({ menu }: { menu: DrupalMenu }) => {
  return (
    <footer className="bg-black py-12 lg:py-20 w-full text-white">
      <div className="container flex flex-col items-center space-y-10">
        <NavMenu menu={menu} variant="footer" />
        <SocialLinks />
        <div className="flex space-x-5 flex-col lg:flex-row">
          <ContactButton type="phone" label="+52 3317911814" />
          <ContactButton label="info@vizi.mx" />
        </div>
        <p className="text-center text-sm">
          © {new Date().getFullYear()} ViziAr. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
