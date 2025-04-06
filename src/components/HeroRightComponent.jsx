import React from "react";
import heroImage from "../assets/images/output-onlinepngtools.png";
import chartIcon from "../assets/images/chart_png.png";

const HeroRightComponent = () => (
  <div className="relative flex justify-center lg:justify-end w-full pt-9">
    <div className="relative" style={{ width: "65%", minWidth: "300px" }}>
      {/* Main image - now smaller with fixed aspect ratio */}
      <img
        alt="Hero Mobile"
        src={heroImage}
        className="w-full h-auto object-contain"
      />

      {/* Chart icon at top left of image - now relative to image */}
      <div className="absolute top-5 left-28 transform -translate-y-1/2 -translate-x-1/2 z-10">
        <img
          src={chartIcon}
          alt="Chart"
          className="w-16 h-16" // Adjusted size
        />
      </div>
    </div>
  </div>
);

export default HeroRightComponent;
