import React from 'react';
import { Link } from 'react-router-dom'; 
import './AISystems.css';

function AISystems({ id, isActive, careerRoute }) {
  const sectionClasses = [
    'mission-section',
    'ai-systems-section',
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
              <h2 className="mission-title">AI & Autonomy</h2>
              <p className="mission-narrative">
                Develop the intelligent systems that guide our spacecraft, manage complex operations on Mars, and analyze vast amounts of cosmic data...
              </p>
            </div>
          </div>
          <div className="flip-card-back">
            <p className="mission-narrative">
              Join our AI team to create groundbreaking technologies in machine learning, robotics, and autonomy that will shape the future of space exploration.
              Engineers at SpaceX play a pivotal role in the design, development, testing, and operation of the company's cutting-edge propulsion systems. These dedicated professionals are the driving force behind the innovative engines like the Merlin, Kestrel, Draco, SuperDraco, and the next-generation Raptor.
              Engineers at SpaceX play a pivotal role in the design, development, testing, and operation of the company's cutting-edge propulsion systems. These dedicated professionals are the driving force behind the innovative engines like the Merlin, Kestrel, Draco, SuperDraco, and the next-generation Raptor.
              Engineers at SpaceX play a pivotal role in the design, development, testing, and operation of the company's cutting-edge propulsion systems. These dedicated professionals are the driving force behind the innovative engines like the Merlin, Kestrel, Draco, SuperDraco, and the next-generation Raptor.
              Engineers at SpaceX play a pivotal role in the design, development, testing, and operation of the company's cutting-edge propulsion systems. These dedicated professionals are the driving force behind the innovative engines like the Merlin, Kestrel, Draco, SuperDraco, and the next-generation Raptor.
              Engineers at SpaceX play a pivotal role in the design, development, testing, and operation of the company's cutting-edge propulsion systems. These dedicated professionals are the driving force behind the innovative engines like the Merlin, Kestrel, Draco, SuperDraco, and the next-generation Raptor.
              Engineers at SpaceX play a pivotal role in the design, development, testing, and operation of the company's cutting-edge propulsion systems. These dedicated professionals are the driving force behind the innovative engines like the Merlin, Kestrel, Draco, SuperDraco, and the next-generation Raptor.
            </p>
            <Link
              to={careerRoute} 
              className="mission-cta"
              tabIndex={isActive ? 0 : -1} 
            >
              Explore AI Roles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AISystems;