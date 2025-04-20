import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
      <Link to="/">
        <img
          src="/logo.jpeg" // Replace with your logo path
          alt="FitCoach Logo"
          className="h-10 w-10 object-contain"
        />
        </Link>
        <span className="text-xl font-bold text-pink-600">FitCoach</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <a href="#" className="hover:text-pink-600 transition">Articles</a>
        <a href="#" className="hover:text-pink-600 transition">Community</a>
        <a href="#" className="hover:text-pink-600 transition">Support</a>
      </nav>

      {/* Logout Button */}
      <button
        className="bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition"
        onClick={() => alert("Logging out...")} // Replace with real logout logic
      >
        Logout
      </button>
    </header>
  );
};

export default Head;
