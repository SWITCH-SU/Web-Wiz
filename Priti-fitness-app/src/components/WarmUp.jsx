import React, { useState, useEffect } from "react";
import ShimmerTransition from "../assets/ShimmerTransition";
import WorkoutModal from "./WorkoutModal";

const WarmUp = () => {
  const [loading, setLoading] = useState(true);
  const [showModal,setShowModal]=useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <ShimmerTransition />;

  return (
    <div className="px-6 py-10">
      <h2 className="text-4xl font-semibold text-center text-pink-500 mb-8">
        Warm-Up: Get Ready for Your Workout!
      </h2>

     
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-purple-950 mb-4">Warm-Up Routine</h3>
        <p className="text-gray-700 mb-4">
          Start your workout with these dynamic warm-up exercises. A proper warm-up increases blood flow to your muscles, prepares your joints, and helps prevent injuries.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-rose-100 rounded-full flex justify-center items-center">
              <span className="text-xl text-rose-500">1</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-900">Arm Circles</h4>
              <p className="text-gray-600">
                Stand tall and extend your arms. Slowly make circles with your arms in both directions for 30 seconds each.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-rose-100 rounded-full flex justify-center items-center">
              <span className="text-xl text-rose-500">2</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-900">Leg Swings</h4>
              <p className="text-gray-600">
                Stand near a wall for support. Swing one leg forward and backward 10-15 times, then switch legs.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-rose-100 rounded-full flex justify-center items-center">
              <span className="text-xl text-rose-500">3</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-900">Hip Rotations</h4>
              <p className="text-gray-600">
                Stand with your feet shoulder-width apart. Rotate your hips in circles for 30 seconds, then switch directions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-rose-100 rounded-full flex justify-center items-center">
              <span className="text-xl text-rose-500">4</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-900">Torso Twists</h4>
              <p className="text-gray-600">
                Stand tall with your arms out to the sides. Gently twist your torso from left to right for 30 seconds.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-pink-500 hover:bg-pink-700 text-white py-2 px-6 rounded-full text-lg transition
          " onClick={()=>setShowModal(true)}>
            Start Workout
          </button>
        </div>
      </div>
      {showModal && <WorkoutModal onClose={()=>setShowModal(false)}/>}
    </div>
  );
};

export default WarmUp;
