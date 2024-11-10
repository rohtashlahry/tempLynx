import React from "react";
import Button from "../button/Button";
import TextCard from "../textCard/textCard";

interface IHeroAboutProps {
  image: string;
  heading: string;
  subHeading: string;
  p1: string;
  b1: string;
}
const HeroAbout: React.FC<IHeroAboutProps> = ({
  image,
  heading,
  subHeading,
  p1,
  b1,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center rounded-lg shadow-md">
      {/* Left Section - Image */}
      <div className="flex flex-1 md:w-1/2 p-8 justify-center">
        <img
          src={image}
          alt="tempera hero section"
          width="200px"
          height="200px"
        />
      </div>

      {/* Right Section - Text and Buttons */}
      <div className="flex-1 p-8">
        <TextCard heading={heading} subHeading={subHeading} description={p1} />
        <div className="flex space-x-4 bg-white">
          <Button label={b1} variant="primary" size="large" />
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
