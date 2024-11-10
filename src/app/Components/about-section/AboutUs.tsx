import React from "react";
import Button from "../button/Button";

interface IAboutusProps {
  subTitle?: string;
  startTitle: string;
  highlights: string;
  endTitle: string;
  description: string;
  leftTitle: string;
  buttonLabel?: string;
}

const AboutUs: React.FC<IAboutusProps> = ({
  subTitle,
  leftTitle,
  startTitle,
  highlights,
  endTitle,
  description,
  buttonLabel,
}) => {
  return (
    <div className="mx-auto p-6">
      <div className="flex flex-col md:flex-row mt-8 px-8 gap-8">
        <div className="w-full md:w-1/4 lg:p-8">
          <h2 className="text-xl sm:text-2xl">{leftTitle}</h2>
        </div>
        <div className="w-full md:w-3/4 lg:pr-16">
          <div className="p-4 lg:pr-16">
            <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-teal-400">
              {subTitle}
            </p>
            <h2 className="text-2xl sm:text-2xl md:text-4xl font-semibold mb-4 lg:pr-16">
              {startTitle}{" "}
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-teal-400">
                {highlights}
              </span>{" "}
              {endTitle}
            </h2>
            <p className="text-base text-gray-700 sm:text-lg md:text-l mb-6 lg:pr-16">
              {description}
            </p>
            {buttonLabel && (
              <Button label={buttonLabel} variant="stylist" size="large" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
