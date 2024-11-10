import React from "react";
import "./clientelslider.css";

interface IClientelSliderProps {
  logos: string[];
}

const ClientelSlider: React.FC<IClientelSliderProps> = ({ logos }) => {
  const duplicatedLogos = [...logos, ...logos, ...logos];
  return (
    <div className="overflow-hidden relative max-w-full border-b-2">
      <div className="flex animate-slide">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 px-4">
            <img
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="w-24 h-24 object-contain m-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientelSlider;
