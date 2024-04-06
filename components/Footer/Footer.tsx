import { DrupalMenu } from "@/types/drupal";
import NavMenu from "../Header/NavMenu";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

const socialData = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/",
    icon: FaFacebook,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    title: "X",
    url: "https://twitter.com/",
    icon: FaTwitter,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
];

const Footer = ({ menu }: { menu: DrupalMenu }) => {
  return (
    <footer className="bg-black py-20 w-full text-white">
      <div className="container flex flex-col items-center space-y-10">
        <NavMenu menu={menu} variant="footer" />
        <div className="flex space-x-10">
          {socialData.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent ease-in-out duration-300 font-bold"
            >
              <item.icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
        <p className="text-center text-sm">
          © {new Date().getFullYear()} ViziAr. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
