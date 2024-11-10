"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Button from "../button/Button";
import TextCard from "../textCard/textCard";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IoChevronBackCircleOutline } from "react-icons/io5";

interface CaseStudy {
  category: string;
  title: string;
  description: string;
  activeUsersIncrease: number;
  revenueIncrease: number;
  imageUrl: string;
}

interface CaseStudyList {
  caseStudies: CaseStudy[];
}

const CaseStudySlider: React.FC<CaseStudyList> = ({ caseStudies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCaseStudy = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length
    );
  };

  const currentCaseStudy = caseStudies[currentIndex];

  return (
    <div className="bg-indigo-500 p-8 rounded-lg shadow-lg text-white mx-auto">
      <div className="flex flex-col md:flex-row mt-8 p-8 space-y-6 md:space-y-0 md:space-x-8 gap-8 relative">
        <div className="md:w-1/3 space-y-4 p-6">
          <div className="flex flex-col space-y-2">
            <button
              onClick={prevCaseStudy}
              className="text-gray-600 hover:text-gray-900 focus:outline-none absolute top-80 left-0 z-10"
            >
              <IoChevronBackCircleOutline size="40"color="white"/>
            </button>
            <div className="text-left item-center">
              <TextCard
                heading={currentCaseStudy.title}
                subHeading={currentCaseStudy.category}
                description={currentCaseStudy.description}
                subHeadingStyle="secondary"
              />
            </div>
            <div className="border"></div>
            <div className="flex gap-8 pt-4 py-4">
              <div>
                <p className="text-4xl font-bold text-yellow-500">
                  {currentCaseStudy.activeUsersIncrease}%
                </p>
                <p className="text-lg">Increase in Active Users</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-yellow-500">
                  {currentCaseStudy.revenueIncrease}%
                </p>
                <p className="text-lg">Increase in Revenue</p>
              </div>
            </div>
            <Button label="View Success Story" size="medium" variant="stylist"/>
          </div>
        </div>
        <div className="md:w-2/3 flex justify-center items-center p-6">
          <img
            src={currentCaseStudy.imageUrl}
            alt="Case Study"
            className="rounded-xl shadow-md"
          />
        </div>
        <button
          onClick={nextCaseStudy}
          className="text-white hover:text-gray-900 focus:outline-none absolute top-80 right-0 z-10"
        >
          <IoChevronForwardCircleOutline size="40"color="white"/>
        </button>
        <div className="flex justify-between mt-8 absolute top-8"></div>
      </div>
    </div>
  );
};

export default CaseStudySlider;
