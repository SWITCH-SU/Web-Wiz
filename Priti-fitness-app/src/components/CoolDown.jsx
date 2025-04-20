import React, { useState, useEffect } from "react";
import ShimmerTransition from "../assets/ShimmerTransition";

const CoolDown = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <ShimmerTransition />;

  return (
    <div className="px-6 py-10">
      <h2 className="text-4xl font-semibold text-center text-pink-500 mb-8">
        Cool Down: Relax and Recover
      </h2>

      {/* Yoga Poses for Cool Down */}
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-purple-950 mb-4">Yoga Stretches</h3>
        <p className="text-gray-700 mb-4">
          These yoga poses will help relax your muscles, reduce tension, and aid recovery after your workout.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex justify-center items-center">
              <span className="text-xl text-emerald-500">1</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-900">Child’s Pose</h4>
              <p className="text-gray-600">
                Sit on your heels with your knees apart. Reach your arms forward and lower your forehead to the mat. Hold for 30-60 seconds.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex justify-center items-center">
              <span className="text-xl text-emerald-500">2</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-900">Downward Dog</h4>
              <p className="text-gray-600">
                Start in a plank position, lift your hips to the sky, and form an inverted V shape. Hold for 30 seconds and breathe deeply.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex justify-center items-center">
              <span className="text-xl text-emerald-500">3</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-900">Seated Forward Bend</h4>
              <p className="text-gray-600">
                Sit with your legs extended in front of you. Hinge at your hips and fold forward, reaching for your feet. Hold for 30 seconds.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex justify-center items-center">
              <span className="text-xl text-emerald-500">4</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-900">Cat-Cow Stretch</h4>
              <p className="text-gray-600">
                On all fours, inhale as you drop your belly towards the mat (cow pose), then exhale as you round your back towards the ceiling (cat pose).
                Perform for 1 minute.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex justify-center items-center">
              <span className="text-xl text-emerald-500">5</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-900">Supine Spinal Twist</h4>
              <p className="text-gray-600">
                Lie on your back and pull your knees towards your chest. Drop your knees to one side while keeping your shoulders on the mat. Hold for 30 seconds each side.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex justify-center items-center">
              <span className="text-xl text-emerald-500">6</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-900">Legs Up the Wall</h4>
              <p className="text-gray-600">
                Lie on your back with your legs extended up against a wall. This pose helps to release tension in the legs and lower back. Hold for 1-3 minutes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-pink-500 hover:bg-pink-700 text-white py-2 px-6 rounded-full text-lg transition">
            Finish Cool Down
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoolDown;

