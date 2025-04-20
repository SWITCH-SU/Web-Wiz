import React from 'react';
import { Link } from 'react-router-dom'; 
import './Propulsion.css';

function Propulsion({ id, isActive, careerRoute }) {
  const sectionClasses = [
    'mission-section',
    'propulsion-section',
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
              <h2 className="mission-title">Propulsion Systems</h2>
              <p className="mission-narrative">
                Engineer the next generation of engines that will carry humanity to Mars and beyond...
              </p>
            </div>
            
            
          </div>
          <div className="flip-card-back">
  <p>
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
    Explore Propulsion Roles
  </Link>
</div>
        </div>
      </div>
    </section>
  );
}

export default Propulsion;
