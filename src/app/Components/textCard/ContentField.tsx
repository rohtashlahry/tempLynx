import React from "react";
import Button from "../button/Button";

interface IContentFieldProps {
  subTitle?: string;
  startTitle: string;
  highlights?: string;
  endTitle?: string;
  description?: string;
  buttonLabel?: string;
  alignment?: string;
}

const ContentField: React.FC<IContentFieldProps> = ({
  subTitle,
  startTitle,
  highlights,
  endTitle,
  description,
  buttonLabel,
  alignment = "left",
}) => {
  return (
    <div className="w-full">
      <div className={`text-${alignment} p-4`}>
        {subTitle && (
          <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-teal-400">
            {subTitle}
          </p>
        )}
        <h2 className="text-2xl sm:text-2xl md:text-4xl font-semibold mb-4">
          {startTitle}{" "}
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-teal-400">
            {highlights}
          </span>{" "}
          {endTitle}
        </h2>
        {description && (
          <p className="text-lg text-gray-900 sm:text-lg md:text-xl mb-6">
            {description}
          </p>
        )}
        {buttonLabel && (
          <Button label={buttonLabel} variant="stylist" size="large" />
        )}
      </div>
    </div>
  );
};

export default ContentField;
