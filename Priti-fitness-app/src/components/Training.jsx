import React, { useState, useEffect } from "react";
import ShimmerTransition from "../assets/ShimmerTransition";
import WorkoutModalTraining from "./WorkoutModalTraining";

const Training = () => {
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
        Training: Build Strength and Endurance
      </h2>

      {/* Training Instructions */}
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-purple-950 mb-4">Training Routine</h3>
        <p className="text-gray-700 mb-4">
          This training program is designed to build strength and endurance. These exercises will push you to your limits and help you grow stronger.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex justify-center items-center">
              <span className="text-xl text-amber-500">1</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-900">Push-Ups</h4>
              <p className="text-gray-600">
                Perform 3 sets of 12-15 push-ups. Focus on form, keeping your body straight and lowering your chest to the ground.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex justify-center items-center">
              <span className="text-xl text-amber-500">2</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-900">Squats</h4>
              <p className="text-gray-600">
                Perform 3 sets of 15-20 squats. Keep your knees behind your toes and your chest lifted.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex justify-center items-center">
              <span className="text-xl text-amber-500">3</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-900">Lunges</h4>
              <p className="text-gray-600">
                Perform 3 sets of 10 lunges on each leg. Step forward, lowering your hips until both knees are bent at 90 degrees.
              </p>
            </div>
          </div>

        

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex justify-center items-center">
              <span className="text-xl text-amber-500">5</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-900">Mountain Climbers</h4>
              <p className="text-gray-600">
                Perform 3 sets of 20-30 mountain climbers, focusing on quick feet and engaging your core.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-pink-500 hover:bg-pink-700 text-white py-2 px-6 rounded-full text-lg transition"
          onClick={()=>setShowModal(true)}>
            Start Workout
          </button>
        </div>
      </div>
      {showModal && <WorkoutModalTraining onClose={()=>setShowModal(false)}/>}
    </div>
  );
};

export default Training;
