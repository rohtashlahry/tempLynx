import React from "react";
import ContentField from "../textCard/ContentField";
import IconCard from "../icon-card/iconCard";

interface IServicesProps {
  serviceList: any;
  subtitle?: string;
  startTitle: string;
  highlights: string;
  endTitle: string;
  description: string;
  buttonLabel?: string;
}
const Services: React.FC<IServicesProps> = ({
  serviceList,
  subtitle,
  startTitle,
  highlights,
  endTitle,
  description,
  buttonLabel,
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        <div className="w-2/3">
          <ContentField
            subTitle={subtitle}
            startTitle={startTitle}
            highlights={highlights}
            endTitle={endTitle}
            description={description}
            buttonLabel={buttonLabel}
            alignment="center"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-2/3">
          <IconCard items={serviceList} />
        </div>
      </div>
    </div>
  );
};

export default Services;
