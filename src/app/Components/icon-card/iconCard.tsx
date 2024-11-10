import React from "react";

interface IServiceCardProps {
  items: any;
}

const IconCard: React.FC<IServiceCardProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 mb-8">
      {items.map((list: any) => (
        <div
          key={list.id}
          className="p-4 flex flex-col items-center text-center transition-transform transform hover:shadow-indigo-500/40 w-full h-64 md:h-72"
        >
          <div className="p-4 mt-4 text-6xl">
            {list.icon}
          </div>
          <h3 className="text-xl sm:text-xl md:text-2xl font-semibold mt-2">
            {list.title}
          </h3>
          <p className="text-black text-xl mt-4">{list.description}</p>
        </div>
      ))}
    </div>
  );
};

export default IconCard;
