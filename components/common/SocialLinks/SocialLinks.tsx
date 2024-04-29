import clsx from "clsx";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

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

const SocialLinks = ({
  align = "left",
  spacing = "large",
}: {
  align?: "left" | "right";
  spacing?: "small" | "large";
}) => {
  return (
    <div
      className={clsx(
        "flex",
        align === "right" && "justify-end",
        spacing === "large" ? "space-x-10" : "space-x-5"
      )}
    >
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
  );
};

export default SocialLinks;
