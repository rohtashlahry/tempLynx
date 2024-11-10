import React from "react";
import Button from "../button/Button";
import "../../globals.css";

interface IHeroBannerProps {
  startTitle: string;
  highlight?: string;
  endTitle: string;
  subtitle: string;
  description: string;
  image: any;
  buttonLabel: string;
}
const HeroBanner: React.FC<IHeroBannerProps> = ({
  startTitle,
  subtitle,
  highlight,
  endTitle,
  description,
  image,
  buttonLabel,
}) => {
  return (
    <div className="home-banner-container pt-8 bg-black">
      <div
        className={`bg-cover bg-opacity-1 h-dvh w-full text-white py-8 mt-8`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex text-white items-center justify-between p-8 py-8">
          <div className="md:w-1/2 mb-8 md:mb-0 p-8">
            <div className="p-4">
              <h2 className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-teal-400">
                {subtitle}
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-4 mt-4">
                {startTitle}{" "}
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-teal-400">
                  {highlight}
                </span>{" "}
                {endTitle}
              </h1>
              <p className="text-base font-normal sm:text-lg md:text-xl mb-6 mt-6">
                {description}
              </p>
              <Button label={buttonLabel} variant="stylist" size="large" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
