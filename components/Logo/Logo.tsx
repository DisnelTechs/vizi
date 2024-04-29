"use client"

import LogoSrc from "@/public/logo-white.jpeg";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link href={`/`}>
      <div
        className="flex space-x-2 items-center bg-white ring-2 hover:ring-4 ring-accent py-2 px-4 rounded-full duration-300 ease-in-out shadow-xl"
        onClick={onClick}
      >
        <Image
          src={LogoSrc}
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
