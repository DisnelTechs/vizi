"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Logo = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <Link href={`/`}>
      <div
        className="flex space-x-2 items-center hover:bg-indigo-800 hover:ring-2 ring-white py-2 px-4 rounded-full duration-300 ease-in-out shadow-xl"
        onMouseEnter={() => setAnimate(true)}
        onMouseLeave={() => setAnimate(false)}
      >
        <div
          className={clsx(
            "rounded-full overflow-hidden",
            animate && "animate-spin"
          )}
        >
          <Image
            src="https://picsum.photos/50/50"
            alt="ViziAr"
            width={40}
            height={40}
          />
        </div>
        <div className="text-white tracking-widest font-bold">ViziAR</div>
      </div>
    </Link>
  );
};

export default Logo;
