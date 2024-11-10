import React from "react";
import Button from "../button/Button";
import TextCard from "../textCard/textCard";

interface IContactCTAProps {
  heading: string;
  subHeading: string;
  description: string;
  image: string;
  buttonLabel: string;
}
const ContactCTA: React.FC<IContactCTAProps> = ({
  heading,
  subHeading,
  description,
  image,
  buttonLabel,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex flex-col items-right md:w-1/2 p-8 rounded-lg">
        <img src={image} alt="Character" className="rounded-lg" />
      </div>
      <div className="flex flex-col items-left md:w-1/2 p-4">
        <div className="text-left">
          <TextCard
            heading={heading}
            subHeading={subHeading}
            description={description}
          />
        </div>
        <form className="w-full max-w-sm mt-6">
          <div className="relative">
            <input
              className="bg-transparent border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-20"
              type="email"
              placeholder="Email address"
            />
            <div className="absolute inset-y-1 right-1 items-center ">
              <Button label={buttonLabel} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactCTA;
