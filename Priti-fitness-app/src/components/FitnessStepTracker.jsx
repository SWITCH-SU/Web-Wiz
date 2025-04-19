import React from "react";
import { useLocation } from "react-router-dom";

const steps = [
  { name: "Warm-Up", path: "/welcome/warmup" },
  { name: "Training", path: "/welcome/training" },
  { name: "Cool Down", path: "/welcome/cooldown" },
];

const FitnessStepTracker = () => {
  const location = useLocation();

  const currentStepIndex = steps.findIndex((step) =>
    location.pathname.includes(step.path)
  );

  return (
    <div className="w-full flex justify-center mt-4 mb-6">
      <div className="flex gap-4 md:gap-10">
        {steps.map((step, index) => {
          const isActive = index === currentStepIndex;
          const isCompleted = index < currentStepIndex;

          return (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-4 h-4 rounded-full mb-1 ${
                  isCompleted || isActive ? "bg-pink-500" : "bg-gray-300"
                }`}
              ></div>
              <p
                className={`text-sm ${
                  isActive ? "font-semibold text-pink-600" : "text-gray-500"
                }`}
              >
                {step.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FitnessStepTracker;
