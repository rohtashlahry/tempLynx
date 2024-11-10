import React from "react";

interface IStatisticsProps {
  list: any;
}
const Statistics: React.FC<IStatisticsProps> = ({ list }) => {
  return (
    <div className="bg-gray-100 border-2 rounded-lg p-8 flex justify-around items-center max-w-6xl mx-auto">
      {list.map((stat: any, index: any) => (
        <div key={index} className="text-center">
          <p className="text-3xl font-semibold text-gray-800">{stat.number}</p>
          <p className="text-gray-600">{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
