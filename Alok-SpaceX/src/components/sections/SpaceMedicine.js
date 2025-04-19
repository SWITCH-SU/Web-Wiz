import React from 'react';
import { Link } from 'react-router-dom'; 
import './SpaceMedicine.css';

function SpaceMedicine({ id, isActive, careerRoute }) {
  const sectionClasses = [
    'mission-section',
    'space-medicine-section',
    isActive ? 'is-active' : '', 
  ].join(' ').trim();

  return (
    <section
      id={id}
      className={sectionClasses}
      aria-hidden={!isActive} 
    >
      <div className="mission-content">
        <div className="flip-card">
          <div className="flip-card-front">
            <div className="mission-text-content">
              <h2 className="mission-title">Space Medicine</h2>
              <p className="mission-narrative">
                Ensure the health and survival of our astronauts...
              </p>
            </div>
          </div>
          <div className="flip-card-back">
            <p className="mission-narrative">
              Join our medical team to develop life-saving technologies and protocols for space exploration. Your work will ensure the safety and well-being of astronauts on long-duration missions.
              Join our medical team to develop life-saving technologies and protocols for space exploration. Your work will ensure the safety and well-being of astronauts on long-duration missions.
              Join our medical team to develop life-saving technologies and protocols for space exploration. Your work will ensure the safety and well-being of astronauts on long-duration missions.
              Join our medical team to develop life-saving technologies and protocols for space exploration. Your work will ensure the safety and well-being of astronauts on long-duration missions.
              Join our medical team to develop life-saving technologies and protocols for space exploration. Your work will ensure the safety and well-being of astronauts on long-duration missions.
              Join our medical team to develop life-saving technologies and protocols for space exploration. Your work will ensure the safety and well-being of astronauts on long-duration missions.
            </p>
            <Link
              to={careerRoute} 
              className="mission-cta"
              tabIndex={isActive ? 0 : -1} 
            >
              Explore Medical Roles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpaceMedicine;