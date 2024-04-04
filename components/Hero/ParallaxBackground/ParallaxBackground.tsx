import FullWidthContainer from "@/components/FullWidthContainer";
import React from "react";

type BreakPointData = {
  /**
   * URL for image
   */
  image: string;
  /**
   * Optional classnames
   */
  className?: string;
};

type Props = {
  base: BreakPointData;
  lg: BreakPointData;
  children: any;
};
/**
 * ParallaxBackground
 *
 * Note iPhone's do not respect fixed background position so we add the
 */
const ParallaxBackground = ({ base, lg, children }: Props) => {
  return (
    <FullWidthContainer fullWidthChildren>
      <div className="hidden lg:block">
        <div
          style={{
            backgroundImage: `url(${lg.image})`,
          }}
          className={`${
            lg.className ?? ""
          } fixed-background bg-cover bg-fixed bg-center bg-no-repeat`}
          data-testid="parallax-background"
        >
          {children}
        </div>
      </div>
      <div className="lg:hidden">
        <div
          style={{
            backgroundImage: `url(${base.image})`,
          }}
          className={`${
            base.className ?? ""
          }  bg-fixed-ios fixed-background bg-cover bg-fixed bg-center bg-no-repeat `}
        >
          {children}
        </div>
      </div>
    </FullWidthContainer>
  );
};

export default ParallaxBackground;
