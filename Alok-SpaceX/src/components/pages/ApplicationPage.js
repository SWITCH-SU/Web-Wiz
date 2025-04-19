import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../Header'; 
import Footer from '../Footer'; 
import './ApplicationPage.css'; 

const getJobTitleById = (id) => {
  const allRoles = {
    p1: 'Rocket Engine Design Engineer',
    p2: 'Propulsion Test Technician',
    p3: 'Materials Engineer - Propulsion',
    a1: 'Machine Learning Engineer - Spacecraft Autonomy',
    a2: 'Robotics Software Engineer',
    a3: 'Data Scientist - Mission Analytics',
    m1: 'Flight Surgeon',
    m2: 'Life Support Systems Engineer',
    m3: 'Human Factors Specialist',
  };
  return allRoles[id] || 'Selected Role';
};

function ApplicationPage() {
  const { jobId } = useParams();
  const jobTitle = getJobTitleById(jobId);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    linkedIn: '',
    resume: null, 
    coverLetter: '',
    jobId: jobId, 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value, 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    console.log('Submitting Application:', formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(`Successfully submitted application for ${jobTitle}!`);
    }, 1500);
  };

  return (
    <div className="application-page-container">
      <Header />
      <main className="application-content">
        <h1>Apply for: {jobTitle}</h1>

        {submitMessage ? (
          <div className="submit-success-message">
            <p>{submitMessage}</p>
            <Link to="/careers" className="back-button">Back to Careers</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="application-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="linkedIn">LinkedIn Profile URL</label>
              <input
                type="url"
                id="linkedIn"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="resume">Resume/CV</label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx,.txt" 
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              {formData.resume && <span className="file-name">Selected: {formData.resume.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="coverLetter">Cover Letter (Optional)</label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows="6"
                value={formData.coverLetter}
                onChange={handleChange}
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default ApplicationPage;