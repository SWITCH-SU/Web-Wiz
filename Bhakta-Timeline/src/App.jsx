import React, { useEffect } from 'react';
import Aurora from './components/Aurora';
import TrueFocus from './components/TrueFocus';
import Timeline from './components/TimeLine';

const App = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.style.backgroundColor = '#111827';
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#51e5f0", "#29d97b", "#51e5f0"]}
          blend={0.5}
          amplitude={1.8}
          speed={1.5}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* TrueFocus positioned in left corner */}
        <div className="absolute left-4 sm:left-[10%] top-4 sm:top-8 ">
          <TrueFocus
            sentence="Smartphone Timeline"
            manualMode={false}
            blurAmount={5}
            borderColor="skyblue"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </div>

        <div className="absolute top-80 w-full z-10 "> {/* Adjust top value as needed */}
          <Timeline/>
        </div>

        {/* Rest of your content can go here */}
      </div>
    </div>
  );
};

export default App;