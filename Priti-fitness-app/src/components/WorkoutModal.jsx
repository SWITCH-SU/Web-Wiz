import React, { useState, useEffect } from "react";

const steps = [
  {
    title: "Arm Circles",
    desc: "Stand tall and extend your arms. Slowly make circles with your arms in both directions.",
    duration: 30, // seconds
  },
  {
    title: "Leg Swings",
    desc: "Stand near a wall. Swing one leg forward and backward, then switch.",
    duration: 30,
  },
  {
    title: "Hip Rotations",
    desc: "Rotate your hips in circles for 30 seconds, then switch directions.",
    duration: 30,
  },
  {
    title: "Torso Twists",
    desc: "Gently twist your torso from left to right for 30 seconds.",
    duration: 30,
  },
];

const WorkoutModal = ({ onClose }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(steps[0].duration);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          if (stepIndex < steps.length - 1) {
            setStepIndex((i) => i + 1);
            return steps[stepIndex + 1].duration;
          } else {
            onClose();
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [stepIndex, isPaused]);

  const step = steps[stepIndex];
  if (!step) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
        
            <h2 className="text-2xl font-bold text-green-600 mb-4">Workout Complete! 🎉</h2>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-pink-500 hover:bg-pink-700 text-white rounded-full"
        >
          Close
        </button>

        </div>
    
    )
    
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-lg text-center relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl">
          &times;
        </button>

        <h2 className="text-2xl font-bold text-purple-900 mb-2">{step.title}</h2>
        <p className="text-gray-700 mb-4">{step.desc}</p>

        <div className="text-4xl font-mono text-pink-600 mb-4">{timeLeft}s</div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-700 transition"
          >
            {isPaused ? "Resume" : "Pause"}
          </button>
          <button
            onClick={() => {
              if (stepIndex < steps.length - 1) {
                setStepIndex(stepIndex + 1);
                setTimeLeft(steps[stepIndex + 1].duration);
              } else {
                onClose();
              }
            }}
            className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
          >
            Skip
          </button>
          <button
            onClick={() => {
              if (stepIndex < steps.length - 1) {
                setStepIndex(stepIndex);
                setTimeLeft(steps[stepIndex].duration);
              } else {
                onClose();
              }
            }}
            className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
          >
          Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutModal;
