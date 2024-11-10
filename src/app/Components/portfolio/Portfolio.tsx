import Button from "../button/Button";

interface PortfolioProps {
  images: string[];
  portfolioHeading: string;
  portdolioDescription: string;
  portfolioButtonLabel: string;
}

const Portfolio: React.FC<PortfolioProps> = ({
  images,
  portfolioHeading,
  portdolioDescription,
  portfolioButtonLabel,
}) => {
  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      {/* Left Section with scrollable images */}
      <div className="relative lg:w-1/2 w-full h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
        {images.map((image, index) => (
          <div
            key={index}
            className="snap-start w-full h-screen flex items-center justify-center"
          >
            <img
              src={image}
              alt={`Portfolio Image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Right Section with fixed information */}
      <div className="lg:w-1/2 w-full p-6 lg:p-10 flex items-center">
        <div className="sticky top-10 lg:top-20 max-w-xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">{portfolioHeading}</h2>
          <p className="mb-6 text-sm lg:text-base">
           {portdolioDescription}
          </p>
          <div className="mb-6">
            <Button label={portfolioButtonLabel} size="medium" />
          </div>
          {/* <div className="mt-6 space-y-2 text-sm lg:text-base">
            <p>
              <strong>Client:</strong> Qode Interactive
            </p>
            <p>
              <strong>Tags:</strong> Proin Gravida
            </p>
            <p>
              <strong>Category:</strong> Categories
            </p>
            <p>
              <strong>Date:</strong> September 4, 2017
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
