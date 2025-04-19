import React, { useEffect } from "react";

const ShimmerTransition = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1500); // 1.5 seconds shimmer

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-rose-300 to-fuchsia-500 animate-fade-in text-white">
     
      <p className="mt-4 text-lg animate-bounce">Preparing your journey...</p>
    </div>
  );
};

export default ShimmerTransition;
