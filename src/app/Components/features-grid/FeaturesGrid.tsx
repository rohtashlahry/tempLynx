import React from "react";

interface IFeatureGridProps {
  items: any;
}
const FeaturesGrid: React.FC<IFeatureGridProps> = ({ items }) => {
  return (
    <div className="text-center py-8">
      <div className="flex flex-wrap justify-center gap-40">
        {items.map((feature: any) => (
          <div
            key={feature.id}
            className="w-64 bg-white p-6"
          >
            <div className="bg-indigo-500 text-white font-bold text-xl rounded-lg w-12 h-12 flex items-center justify-center mb-4 mx-auto">
              {feature.id}.
            </div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
