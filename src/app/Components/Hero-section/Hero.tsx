import React from "react";
import Button from "../button/Button";

interface IHeroProps {
  heading: string;
  subHeading: string;
  description: string;
  button: string;
  image: any;
}

const HeroSection: React.FC<IHeroProps> = ({
  heading,
  subHeading,
  description,
  image,
  button,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      <div className="md:w-1/2 mb-8 md:mb-0 p-8">
        <span className="py-0.5 px-2 rounded font-medium text-indigo-500 bg-indigo-500/10">
          {subHeading}
        </span>
        <h1 className="md:text-5xl/tight text-4xl/tight font-semibold mt-4">
          {heading}
        </h1>
        <p className="text-base font-medium text-muted mt-6 mb-4">
          {description}
        </p>
        <Button label={button} size="medium" />
      </div>
      <div className="md:w-1/2 p-8">
        <img src={image} alt="Illustration" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default HeroSection;
