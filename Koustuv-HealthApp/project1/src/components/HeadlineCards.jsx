import React from "react";

const HeadlineCards = ({theme}) => {
  return (
    <div className={theme ? "max-w-[1640p] mx-auto p-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6" : "bg-[#0e1111] max-w-[1640p] mx-auto p-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6"}>
      <div className="rounded-xl relative">
        {/*Overlay */}
        <div className="absolute rounded-xl w-full h-full bg-black/40 text-white">
          <p className="whitespace-nowrap font-bold text-2xl px-2 pt-4">Workout Log</p>
          <p className="font-bold px-2">Log Every Lift</p>
          <button className="mx-2 absolute bottom-4 bg-green-600 text-white cursor-pointer">
            Start Logging
          </button>
        </div>
        <img
          className="max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        {/*Overlay */}
        <div className="absolute rounded-xl w-full h-full bg-black/40 text-white">
          <p className="whitespace-nowrap font-bold text-2xl px-2 pt-4">Check Progress</p>
          <p className="font-bold px-2">See Your Growth</p>
          <button className="mx-2 bg-green-600 text-white cursor-pointer absolute bottom-4">
            See Report
          </button>
        </div>
        <img
          className="max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        {/*Overlay */}
        <div className="absolute rounded-xl w-full h-full bg-black/40 text-white">
          <p className="whitespace-nowrap font-bold text-2xl px-2 pt-4">Nutrition</p>
          <p className="font-bold px-2">Fuel Your Goals</p>
          <button className="mx-2 bg-green-600 text-white cursor-pointer absolute bottom-4">
            Diet Plans
          </button>
        </div>
        <img
          className="max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1161682/pexels-photo-1161682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        {/*Overlay */}
        <div className="absolute rounded-xl w-full h-full bg-black/40 text-white">
          <p className="whitespace-nowrap font-bold text-2xl px-2 pt-4">Recovery</p>
          <p className="font-bold px-2">Healing to Perform</p>
          <button className="mx-2 bg-green-600 text-white cursor-pointer absolute bottom-4">
            Advices
          </button>
        </div>
        <img
          className="max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/917732/pexels-photo-917732.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
