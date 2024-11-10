import React from "react";

interface ITextCardProps {
  heading: string;
  subHeading?: string;
  description?: string;
  alignment?: any;
  subHeadingStyle?: string;
}
const TextCard: React.FC<ITextCardProps> = ({
  heading,
  subHeading,
  description,
  alignment = "left",
  subHeadingStyle = "primary",
}) => {
  return (
    <div
      className="flex flex-col md:flex-row items-center"
      style={{ textAlign: alignment }}
    >
      <div className="flex-1">
        {subHeading && (
          <span
            className={
              subHeadingStyle == "primary"
                ? "py-0.5 px-2 rounded font-medium text-indigo-500 bg-indigo-500/10"
                : "text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-teal-400"
            }
          >
            {subHeading}
          </span>
        )}
        <h2 className="md:text-3xl/tight text-4xl/tight font-semibold mt-1">
          {heading}
        </h2>
        {description && (
          <p className="text-base font-medium text-muted mt-6 mb-4">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextCard;
