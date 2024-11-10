"use client";
import React, { useState } from "react";

interface ITestimonialProps {
  data: any;
  logos: any;
}

const ClientTestimonials: React.FC<ITestimonialProps> = ({ data, logos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = data[currentIndex];
  return (
    <div className="lg:p-6 max-h-fit">
      <div className="max-w-7xl sm:flex sm:gap-8 mx-auto gap-8 lg:p-8">
        <div className="lg:w-1/2 bg-white rounded-2xl p-8 gap-4 mt-2">
          <div className="flex flex-wrap gap-8">
            {logos?.map((img: any, index: any) => (
              <img
              key={index}
                src={img}
                alt="alt text"
                width="auto"
                height="auto"
                className="w-24 object-contain"
              />
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 gap-4 mt-2">
          <div className="flex flex-col flex-1 justify-between">
            <p className="text-xl font-bold uppercase">
              {testimonials.companyName}
            </p>
            <p className="h-64 text-2xl font-semibold mt-4">
              {testimonials.review}
            </p>
            <div className="mt-8">
              <p className="text-2xl font-semibold pt-2 border-t-2">
                {testimonials.designation}
              </p>
              <div className="flex gap-1 mt-4">
                {data?.map((item: any, index: any) => (
                  <div
                    key={index}
                    className={`border-4 rounded-xl cursor-pointer ${
                      currentIndex === index
                        ? "border-white w-8"
                        : "border-gray-400 w-6"
                    }`}
                    onClick={() =>
                      setCurrentIndex(
                        (prevIndex) => (prevIndex + 1) % data.length
                      )
                    }
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
