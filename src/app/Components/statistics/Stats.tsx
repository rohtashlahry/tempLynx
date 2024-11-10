import React from "react";
import "../../globals.css";
import Button from "../button/Button";

interface Stat {
  value: string;
  circleText: string;
  label: string;
}

interface StatisticsProps {
  title: string;
  highlight: string;
  subtitle: string;
  stats: Stat[];
  buttonText: string;
}

const Statistics: React.FC<StatisticsProps> = ({
  title,
  highlight,
  subtitle,
  stats,
  buttonText,
}) => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-gray-300 text-white py-10 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start justify-between items-center">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 items-center">
          {title}{" "}
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-teal-400">
            {highlight}
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6">{subtitle}</p>
        <Button label={buttonText} variant="stylist" />
      </div>

      {/* Right Section - Statistics */}
      <div className="lg:w-1/2 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-8 p-4 sm:p-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center text-center"
          >
            {/* Main Stat Number */}
            <div className="text-4xl sm:text-5xl font-bold text-yellow-400 p-4 sm:p-8">
              {stat.value}
              <p className="text-sm sm:text-base text-white font-bold mt-2">
                {stat.label}
              </p>
            </div>
            {/* Circular Rotating Text */}
            <div className="text-white absolute inset-0 flex items-center justify-center">
              <svg
                className="text-white w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 animate-spin-slow"
                viewBox="0 0 100 100"
              >
                <defs>
                  <path
                    id={`circlePath-${index}`}
                    d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  />
                </defs>
                <text className="text-xs sm:text-sm antialiased tracking-widest uppercase">
                  <textPath
                    href={`#circlePath-${index}`}
                    className="text-white p-4"
                  >
                    {stat.circleText}
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
