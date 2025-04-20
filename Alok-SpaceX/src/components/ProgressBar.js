import React from 'react';
import './ProgressBar.css'; 

const ProgressBar = ({ progress }) => {
  
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-indicator"
        style={{ width: `${clampedProgress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
