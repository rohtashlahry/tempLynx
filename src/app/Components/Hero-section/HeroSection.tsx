import React from "react";
import Button from "../button/Button";
import { FaArrowRightLong } from "react-icons/fa6";

interface IHerosectionProps {
  image: any;
  heading: string;
  p1: string;
  b1: string;
  b2: string;
}
const HeroSection: React.FC<IHerosectionProps> = ({
  image,
  heading,
  p1,
  b1,
  b2,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center rounded-lg shadow-md">
      {/* Left Section - Image */}
      <div className="flex-1 mb-6 md:mb-0 md:mr-8 bg-indigo-100 rounded-r-3xl">
        <img
          src={image}
          alt="tempera hero section"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Section - Text and Buttons */}
      <div className="flex-1 p-8">
        <h2 className="text-5xl font-bold mb-4">{heading}</h2>
        <p className="text-gray-600 mb-6">{p1}</p>
        <div className="flex space-x-4 bg-white">
          <Button label={b1} variant="primary" size="large" />
          <Button
            label={b2}
            variant="outline"
            size="large"
            icon={<FaArrowRightLong />}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
