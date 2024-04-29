"use client";

import LogoSrc from "@/public/logo-white.jpeg";
import LogoTransparent from "@/public/logo-transparent.png";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Logo = ({ onClick, variant = "secondary" }: LogoProps) => {
  return (
    <Link href={`/`}>
      <div
        className={clsx("flex space-x-2 items-center ring-2 hover:ring-4  py-2 px-4 rounded-full duration-300 ease-in-out shadow-xl",
          variant === "primary" ? "bg-secondary ring-0" : "bg-white ring-accent"
        )}
        onClick={onClick}
      >
        <Image
          src={variant === 'primary' ? LogoTransparent : LogoSrc}
          alt="ViziAr"
          width={80}
          height={0}
          style={{ height: "auto" }}
        />
      </div>
    </Link>
  );
};

export default Logo;
