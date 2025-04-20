import React, {useState, useEffect} from 'react'

const workouts = [
    {
      title: "Full Body Burn",
      desc: "15 minutes to energize your whole body.",
      image: "/WorkoutCards/fullbody.jpg",
    },
    {
      title: "Core Crusher",
      desc: "Sculpt and strengthen your abs.",
      image: "/WorkoutCards/core.jpg",
    },
    {
      title: "Leg Day Boost",
      desc: "Fire up your glutes and legs today!",
      image: "/WorkoutCards/legs.jpg",
    },
  ];

const WorkoutCard = () => {
    const [workout,setWorkout]=useState(null);
    useEffect(()=>{
        const stored=localStorage.getItem("dailyWorkout");
        const today=new Date().toDateString();
        if(stored){
            const {date ,workout}=JSON.parse(stored);
            if(date===today){
                setWorkout(workout);
                return;
            }
        }
        const random = workouts[Math.floor(Math.random() * workouts.length)];
        const data={date:today,workout:random};
        localStorage.setItem("dailyWorkout",JSON.stringify(data));
        setWorkout(random);
    },[]);
    if (!workout) return null;
  return (
    <div>
        <div className="mb-10 ">
      
      <div className="border border-pink-500 border-4 relative rounded-xl overflow-hidden shadow-lg max-w-xl mx-auto m-2">
        <img
          src={workout.image}
          alt={workout.title}
          className="w-full h-64 object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-pink-200 opacity-20"></div>
        <h3 className="text-lg text-center font-bold text-pink-700 uppercase tracking-wide mb-2">
            Workout of the Day
          </h3>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
          <h4 className="text-2xl font-semibold text-white mb-2">
            {workout.title}
          </h4>
          <p className="text-black">{workout.desc}</p>
          {/* <p className="mt-3 text-sm text-black">Refreshes daily</p> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default WorkoutCard