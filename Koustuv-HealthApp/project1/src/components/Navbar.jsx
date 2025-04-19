import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { GiStrong } from "react-icons/gi";
import { RiProgress5Line } from "react-icons/ri";
import { IoNutrition } from "react-icons/io5";
import { GiMeditation } from "react-icons/gi";
import { FaCalculator } from "react-icons/fa";


const Navbar = ({theme, setTheme}) => {
  const [nav, setNav] = useState(false);
  const [lightDarkToggle, setLightDarkToggle] = useState(true);
  const [workoutTab, setWorkoutTab] = useState(false);
  const [progressTab, setProgressTab] = useState(false);
  const [nutritionTab, setNutritionTab] = useState(false);
  const [recoveryTab, setRecoveryTab] = useState(false);
  const [unit, setUnit] = useState("true");
  const [unith, setUnitH] = useState("true");
  const [bmiShow, setBmiShow] = useState(false);

  return (
    <div className={theme ? "flex items-center max-w-[1640p] mx-auto justify-between p-4" : "bg-[#0e1111] flex items-center max-w-[1640p] mx-auto justify-between p-4"}>
      {/*Left side */}
      <div className={theme ? "flex items-center" : "text-[#f0f0f0] flex items-center"}>
        <AiOutlineMenu
          onClick={() => setNav(!nav)}
          size={25}
          className="cursor-pointer"
        />
        <p className="flex items-center text-2xl sm:text-3xl lg:text-4xl px-4">
          Health <span className="font-extrabold text-green-600">Tracker</span>
        </p>
        <button onClick={() => setBmiShow(true)} className="hidden md:inline-block md:mx-2 whitespace-nowrap bg-green-600 text-white cursor-pointer">
          BMI Calculator!
        </button>
      </div>

      {/*BMI Calculator Window*/}
      {bmiShow && (
        <div className={theme ? "fixed top-16 right-6 w-[100%] max-w-md bg-white shadow-2xl rounded-2xl p-6 z-20 animate-slide-in" : "fixed top-16 right-6 w-[100%] max-w-md bg-[#202225] text-[#f0f2f0] shadow-2xl rounded-2xl p-6 z-20 animate-slide-in"}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FaCalculator size={20} /> BMI Calculator
            </h3>
            <MdClose
              size={24}
              className="cursor-pointer text-gray-500 hover:text-gray-800"
              onClick={() => setBmiShow(false)}
            />
          </div>
          <div className="flex justify-center">
            <iframe className="rounded-xl" src="https://www.cdc.gov/bmi/adult-calculator/calculator.html" title="Adult BMI Calculator" height="440"></iframe>
          </div>
        </div>
      )}

      {/*Side Menu Overlay*/}
      {nav ? (
        <div className="bg-black/80 w-full h-screen fixed top-0, left-0 duration-150 z-10"></div>
      ) : (
        ""
      )}

      {/*Side Menu Bar */}
      <div
        className={
          nav
            ? theme ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-150" : "fixed top-0 left-0 w-[300px] h-screen text-[#f0f0f0] bg-[#0e1111] z-10 duration-150"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-150"
        }
      >
        <MdClose
          size={20}
          onClick={() => setNav(!nav)}
          className="absolute top-4 right-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Health <span className="font-bold">Tracker</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li
              onClick={() => {
                setWorkoutTab(true);
                setProgressTab(false);
                setNutritionTab(false);
                setRecoveryTab(false);
                setNav(false);
              }}
              className={theme ? "flex items-center py-4 cursor-pointer" : "flex text-[#f0f0f0] items-center py-4 cursor-pointer"}
            >
              <GiStrong className="mr-4" size={20} />
              Workouts
            </li>
            <li
              onClick={() => {
                setWorkoutTab(false);
                setProgressTab(true);
                setNutritionTab(false);
                setRecoveryTab(false);
                setNav(false);
              }}
              className={theme ? "flex items-center py-4 cursor-pointer" : "flex text-[#f0f0f0] items-center py-4 cursor-pointer"}
            >
              <RiProgress5Line className="mr-4" size={20} />
              Progress
            </li>
            <li
              onClick={() => {
                setWorkoutTab(false);
                setProgressTab(false);
                setNutritionTab(true);
                setRecoveryTab(false);
                setNav(false);
              }}
              className={theme ? "flex items-center py-4 cursor-pointer" : "flex text-[#f0f0f0] items-center py-4 cursor-pointer"}
            >
              <IoNutrition className="mr-4" size={20} />
              Nutrition
            </li>
            <li
              onClick={() => {
                setWorkoutTab(false);
                setProgressTab(false);
                setNutritionTab(false);
                setRecoveryTab(true);
                setNav(false);
              }}
              className={theme ? "flex items-center py-4 cursor-pointer" : "flex text-[#f0f0f0] items-center py-4 cursor-pointer"}
            >
              <GiMeditation className="mr-4" size={20} />
              Recovery
            </li>
          </ul>
        </nav>
      </div>

      {/*Search button */}
      <div className={theme ? "flex items-center bg-gray-200 text-gray-500 rounded-full px-2 w-[200px] sm:w-[300px] lg:w-[400px]": "flex items-center bg-slate-800 text-gray-200 rounded-full px-2 w-[200px] sm:w-[300px] lg:w-[400px]"}>
        <AiOutlineSearch className="cursor-pointer" size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search plans, equipments, trainers, diets.."
        />
      </div>

      {/* Workout Window */}
      {workoutTab && (
        <div className={theme ? "fixed top-16 right-6 w-[90%] max-w-md bg-white shadow-2xl rounded-2xl p-6 z-20 animate-slide-in" : "fixed top-16 right-6 w-[90%] max-w-md bg-[#202225] text-[#f0f0f0] shadow-2xl rounded-2xl p-6 z-20 animate-slide-in"}>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold flex items-center gap-2 p-2">
                <GiStrong size={20} /> Log Workout
              </h3>
            </div>

            <MdClose
              size={24}
              className={theme ? "cursor-pointer text-gray-700 hover:text-gray-200 duration-150" : "cursor-pointer text-gray-200 hover:text-gray-800 duration-150"}
              onClick={() => setWorkoutTab(false)}
            />
          </div>

          <form className="space-y-4">
            <div>
              <label className={theme ? "block text-sm font-medium text-gray-700" : "block text-sm font-medium text-gray-200"}>
                Exercise
              </label>
              <input
                type="text"
                name="exercise"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                placeholder="e.g., Bench Press"
              />
            </div>
            <div>
              <label className={theme ? "block text-sm font-medium text-gray-700" : "block text-sm font-medium text-gray-200"}>
                Sets
              </label>
              <input
                type="number"
                name="sets"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                placeholder="e.g., 3"
              />
            </div>
            <div>
              <label className={theme ? "block text-sm font-medium text-gray-700" : "block text-sm font-medium text-gray-200"}>
                Reps
              </label>
              <input
                type="number"
                name="reps"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                placeholder="e.g., 10"
              />
            </div>
            <div>
              <div className="flex items-center flex-row-reverse justify-between">
                
                {/*Toggle button */}
                <div
                  onClick={() => setUnit(!unit)}
                  className="border-2 text-[12px] border-green-600 hidden md:flex items-center p-1 bg-green-100 rounded-full cursor-pointer"
                >
                  <p
                    className={
                      unit
                        ? "bg-green-600 text-white p-1 rounded-full duration-150"
                        : "p-1 text-green-600 duration-150"
                    }
                  >
                    kg
                  </p>
                  <p
                    className={
                      unit
                        ? "p-1 text-green-600 duration-150"
                        : "bg-green-600 text-white p-1 rounded-full duration-150"
                    }
                  >
                    lb
                  </p>
                </div>
                <label className={theme ? "block text-sm font-medium text-gray-700" : "block text-sm font-medium text-gray-200"}>
                  Weight {unit ? "(kg)" : "(lb)"}
                </label>
              </div>
              <input
                type="number"
                name="weight"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                placeholder="e.g., 60"
              />
            </div>
            <div>
              <div className="flex items-center flex-row-reverse justify-between">
                
                {/*Toggle button */}
                <div
                  onClick={() => setUnitH(!unith)}
                  className="border-2 text-[12px] border-green-600 hidden md:flex items-center p-1 bg-green-100 rounded-full cursor-pointer"
                >
                  <p
                    className={
                      unit
                        ? "bg-green-600 text-white p-1 rounded-full duration-150"
                        : "p-1 text-green-600 duration-150"
                    }
                  >
                    cm
                  </p>
                  <p
                    className={
                      unit
                        ? "p-1 text-green-600 duration-150"
                        : "bg-green-600 text-white p-1 rounded-full duration-150"
                    }
                  >
                    feet
                  </p>
                </div>
                <label className={theme ? "block text-sm font-medium text-gray-700" : "block text-sm font-medium text-gray-200"}>
                  Height {unith ? "(cm)" : "(feet)"}
                </label>
              </div>
              <input
                type="number"
                name="weight"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                placeholder="e.g., 60"
              />
            </div>
            <button
              type="button"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
            >
              Save Workout
            </button>
          </form>
        </div>
      )}

      {/*Progress Window */}
      {progressTab && (
        <div className={theme ? "fixed top-16 right-6 w-[90%] max-w-md bg-white shadow-2xl rounded-2xl p-6 z-20 animate-slide-in" : "fixed top-16 right-6 w-[90%] max-w-md bg-[#202225] text-[#f0f2f0] shadow-2xl rounded-2xl p-6 z-20 animate-slide-in"}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <RiProgress5Line size={20} /> Progress Overview
            </h3>
            <MdClose
              size={24}
              className="cursor-pointer text-gray-500 hover:text-gray-800"
              onClick={() => setProgressTab(false)}
            />
          </div>
          <p className={theme ? "text-gray-600" : "text-gray-200"}>
            Your weekly/monthly progress report. Analyze. Assess. Achieve.
          </p>
        </div>
      )}

      {/*Nutrition Window */}
      {nutritionTab && (
        <div className={theme ? "fixed top-16 right-6 w-[90%] max-w-md bg-white shadow-2xl rounded-2xl p-6 z-20 animate-slide-in" : "fixed top-16 right-6 w-[90%] max-w-md bg-[#202225] text-[#f0f2f0] shadow-2xl rounded-2xl p-6 z-20 animate-slide-in"}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <IoNutrition size={20} /> Nutrition Log
            </h3>
            <MdClose
              size={24}
              className="cursor-pointer text-gray-500 hover:text-gray-800"
              onClick={() => setNutritionTab(false)}
            />
          </div>
          <p className={theme ? "text-gray-600" : "text-gray-200"}>
            Keep track of your meals, calories, and diets.
          </p>
        </div>
      )}

      {/*Recovery Window */}
      {recoveryTab && (
        <div className={theme ? "fixed top-16 right-6 w-[90%] max-w-md bg-white shadow-2xl rounded-2xl p-6 z-20 animate-slide-in": "fixed top-16 right-6 w-[90%] max-w-md bg-[#202225] text-[#f0f2f0] shadow-2xl rounded-2xl p-6 z-20 animate-slide-in"}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <GiMeditation size={20} /> Recovery Insights
            </h3>
            <MdClose
              size={24}
              className="cursor-pointer text-gray-500 hover:text-gray-800"
              onClick={() => setRecoveryTab(false)}
            />
          </div>
          <p className={theme ? "text-gray-600" : "text-gray-200"}>
            Monitor sleep, rest days, and stretching. Recovery tools coming
            soon!
          </p>
        </div>
      )}

      {/*Right Side */}
      <div className="flex items-center justify-between ">
        <div
          onClick={() => {
            setLightDarkToggle(!lightDarkToggle);
            setTheme(!theme);
            }}
          className="hidden lg:flex items-center border-4 border-green-600 bg-green-100 p-1 rounded-full text-[14px] mr-2 text-white cursor-pointer"
        >
          <p>
            <MdLightMode
              size={30}
              className={
                lightDarkToggle
                  ? "bg-green-600 rounded-full p-2 duration-150"
                  : "p-2 text-green-600"
              }
            />
          </p>
          <p>
            <MdDarkMode
              size={30}
              className={
                lightDarkToggle
                  ? "p-2 text-green-600"
                  : "bg-green-600 rounded-full p-2 duration-150"
              }
            />
          </p>
        </div>
        <button className="flex items-center p-2 bg-green-600 text-white cursor-pointer">
          <FaShoppingCart size={20} className="mr-2" />
          Cart
        </button>
      </div>
    </div>
  );
};

export default Navbar;
