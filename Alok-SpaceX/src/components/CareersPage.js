
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './CareersPage.css'; 


const allRoles = {
  propulsion: [
    { id: 'p1', title: 'Rocket Engine Design Engineer', location: 'Hawthorne, CA' },
    { id: 'p2', title: 'Propulsion Test Technician', location: 'McGregor, TX' },
    { id: 'p3', title: 'Materials Engineer - Propulsion', location: 'Hawthorne, CA' },
  ],
  'ai-systems': [
    { id: 'a1', title: 'Machine Learning Engineer - Spacecraft Autonomy', location: 'Remote' },
    { id: 'a2', title: 'Robotics Software Engineer', location: 'Mars Colony (Simulated)' },
    { id: 'a3', title: 'Data Scientist - Mission Analytics', location: 'Hawthorne, CA' },
  ],
  'space-medicine': [
    { id: 'm1', title: 'Flight Surgeon', location: 'Mars Colony (Simulated)' },
    { id: 'm2', title: 'Life Support Systems Engineer', location: 'Hawthorne, CA' },
    { id: 'm3', title: 'Human Factors Specialist', location: 'Remote' },
  ],
  'all': [
    { id: 'p1', title: 'Rocket Engine Design Engineer', location: 'Hawthorne, CA' },
    { id: 'p2', title: 'Propulsion Test Technician', location: 'McGregor, TX' },
    { id: 'p3', title: 'Materials Engineer - Propulsion', location: 'Hawthorne, CA' },
    { id: 'a1', title: 'Machine Learning Engineer - Spacecraft Autonomy', location: 'Remote' },
    { id: 'a2', title: 'Robotics Software Engineer', location: 'Mars Colony (Simulated)' },
    { id: 'a3', title: 'Data Scientist - Mission Analytics', location: 'Hawthorne, CA' },
    { id: 'm1', title: 'Flight Surgeon', location: 'Mars Colony (Simulated)' },
    { id: 'm2', title: 'Life Support Systems Engineer', location: 'Hawthorne, CA' },
    { id: 'm3', title: 'Human Factors Specialist', location: 'Remote' },
  ],
  
  
};

function CareersPage() {
  const { department } = useParams(); 

  
  const rolesToShow = department === 'all' || !department
    ? Object.values(allRoles).flat() 
    : allRoles[department] || []; 

  const departmentTitle = department === 'all' || !department
    ? 'All Open Roles'
    : `${department.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Roles`; // Format title

    return (
      <div className="careers-page-container">
        <Header />
        <main className="careers-content">
          <h1>{departmentTitle}</h1>
          {rolesToShow.length > 0 ? (
            <ul className="roles-list">
              {rolesToShow.map(role => (
                <li key={role.id} className="role-item">
                  <h2>{role.title}</h2>
                  <p>{role.location}</p>
                  
                  <Link to={`/apply/${role.id}`} className="apply-button">Apply Now</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No roles are currently available in this department.</p>
          )}
        </main>
        <Footer />
      </div>
    )
}

export default CareersPage;
