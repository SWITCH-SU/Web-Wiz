import React, { useState, useEffect } from "react";
import ShimmerTransition from "../assets/ShimmerTransition";
import { useNavigate } from "react-router-dom";
import WorkoutCard from "./WorkoutCard";


const Welcome = () => {
    const navigate=useNavigate();
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      title: "Warm-Up",
      desc: "Get your body moving and blood flowing. Stretch, breathe, and energize.",
      color: "bg-rose-100",
      image: "/WelcomePage/warmup.jpg",
      path: "warmup", // Link to warm-up page
    },
    {
      title: "Training",
      desc: "Build strength and endurance with curated workouts tailored for women.",
      color: "bg-amber-100",
      image: "/WelcomePage/training.jpg",
      path: "training", // Link to training page
    },
    {
      title: "Cool Down",
      desc: "Let your muscles recover and relax with post-workout cooldown routines.",
      color: "bg-emerald-100",
      image: "/WelcomePage/cooldown.jpg",
      path: "cooldown", // Link to cool down page
    },
  ];

  if (loading) return <ShimmerTransition />;

  return (
    <>
  
    
    <div className="px-6 py-10">
     
      <h2 className="text-4xl font-semibold text-center text-pink-500 mb-8">
        Welcome to Your Fitness Journey!
      </h2>
      <WorkoutCard/>

      {/* Sections for Warm-Up, Training, Cool Down */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-xl shadow-md w-full md:w-1/3 h-64 transition duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer`}
            onClick={() => navigate(section.path)} // Navigate on click
          >
            <img
              src={section.image}
              alt={section.title}
              className="absolute inset-0 w-full h-full object-cover opacity-70 blur-[1px]"
            />
            <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
              <h2 className="text-xl font-bold text-purple-950 mb-2">
                {section.title}
              </h2>
              <p className="text-purple-900">{section.desc}</p>
              <button className="bg-pink-500 hover:bg-pink-700 text-white m-3 px-5 py-2 rounded-full text-sm shadow transition">
                Start Now
              </button>
            </div>
            <div
              className={`absolute inset-0 ${section.color} opacity-30`}
            ></div>
          </div>
        ))}
      </div>

      {/* Transformation Stories Section */}
      <div className="mt-10 bg-purple-100 rounded-xl shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold text-purple-700 mb-3">
          Transformation Stories
        </h2>
        <p className="text-gray-700">
          Real women. Real results. Discover how our program has changed lives
          through physical fitness and mindset transformation.
        </p>
      </div>
    </div>
    </>
  );
};

export default Welcome;
