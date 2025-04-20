import React, { useState, useEffect } from 'react';

const quotesList = [
  "You are stronger than you think.",
  "Progress over perfection.",
  "Start where you are. Use what you have. Do what you can.",
  "The only bad workout is the one that didn’t happen.",
  "Your body can stand almost anything. It’s your mind you have to convince.",
  "Discipline is doing it even when you don’t feel like it.",
  "Strong women lift each other up — and weights.",
  "Consistency creates confidence."
];

const Quotes = () => {
  const [index, setIndex] = useState(0);  ///track the current quote 

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % quotesList.length);
    }, 5000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-100 to-purple-100 text-center py-4 px-6 shadow">
      <p className="text-lg font-medium italic text-pink-700 transition-all duration-500 ease-in-out">
        “{quotesList[index]}”
      </p>
    </div>
  );
};

export default Quotes;

