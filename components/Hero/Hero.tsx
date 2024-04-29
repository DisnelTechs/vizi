import Image from "next/image";
import ParallaxBackground from "./ParallaxBackground";

interface HeroProps {
  title: string;
  subtitle?: string;
  imgSrc?: string;
  logo?: string;
}

export default function Hero({
  title,
  subtitle,
  imgSrc = "",
  logo = "",
}: HeroProps) {
  const commonProps = {
    image: imgSrc?.length > 0 ? imgSrc : "https://picsum.photos/1366/768",
    className: "relative h-[80vh] bg-black",
  };

  return (
    <ParallaxBackground base={commonProps} lg={commonProps}>
      <div className="bg-black absolute w-full h-full top-0 left-0 opacity-50" />
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/4 text-white uppercase tracking-widest left-1/4">
        <div>{title}</div>
        <div className="font-bold text-2xl lg:text-4xl max-w-lg">
          {subtitle}
        </div>
      </div>
      {logo && (
        <div className="absolute -bottom-[48px] lg:-bottom-[60px] w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] left-1/2 -translate-x-1/2 z-20 p-8 rounded-full bg-primary">
          <Image src={logo} alt="logo" />
        </div>
      )}
    </ParallaxBackground>
  );
}
