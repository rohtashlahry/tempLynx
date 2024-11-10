"use client";
import React, { useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  backgroundColor: string;
}

interface ProcessFlowProps {
  steps: Step[];
}

const ProcessFlow: React.FC<ProcessFlowProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="flex flex-col md:flex-row items-center overflow-hidden p-8 rounded-xl w-full">
      <div className="flex flex-col md:flex-row w-full bg-black rounded-2xl overflow-hidden">
        {steps.map((step) => (
          <div
            key={step.id}
            onMouseEnter={() => setActiveStep(step.id)}
            onMouseLeave={() => setActiveStep(null)}
            className={`text-left flex flex-col items-center justify-between transition-all duration-500 ease-in-out ${
              activeStep === step.id
                ? "md:w-1/2 bg-gradient-to-r from-purple-500 to-blue-500 h-96 text-left"
                : "md:w-1/6 border-x text-left"
            } bg-black text-white p-6 shadow-md cursor-pointer h-72 md:h-96`}
          >
            <div className="text-left">
              <div
                className={`${
                  activeStep === step.id
                    ? "flex flex-row-reverse justify-between w-full"
                    : "text-left"
                }`}
              >
                <div
                  className={`mb-4 ${
                    activeStep === step.id ? "text-white" : "text-gray-500"
                  } `}
                >
                  {step.icon}
                </div>
                <div>
                  <div
                    className={`${
                      activeStep === step.id ? "text-4xl" : "text-2xl"
                    } text-gray-400 font-bold mb-2`}
                  >{`0${step.id}`}</div>
                  <div
                    className={`${
                      activeStep === step.id ? "text-2xl" : "text-xl"
                    } text-left font-semibold`}
                  >
                    {step.title}
                  </div>
                </div>
              </div>
              {activeStep === step.id && (
                <div className="mt-4 text-lg">{step.description}</div>
              )}
            </div>
            {activeStep !== step.id && (
              <div className="mt-6 bg-white text-black rounded-full p-4">
                <IoArrowForwardOutline size="20px" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessFlow;
