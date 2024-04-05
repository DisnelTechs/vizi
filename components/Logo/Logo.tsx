import LogoSrc from "@/public/logo-white.jpeg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={`/`}>
      <div className="flex space-x-2 items-center bg-white ring-2 hover:ring-4 ring-accent py-2 px-4 rounded-full duration-300 ease-in-out shadow-xl">
        <Image
          src={LogoSrc}
          alt="ViziAr"
          width={0}
          height={0}
          style={{ width: "100px", height: "auto" }}
        />
      </div>
    </Link>
  );
};

export default Logo;
