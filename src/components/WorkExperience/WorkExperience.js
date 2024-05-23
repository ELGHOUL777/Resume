import React from 'react';

const WorkExperience = ({ workExperience }) => {
  return (
    <div className="section">
      <h3>Experience</h3>
      <ul>
        {workExperience.map((experience, index) => (
          <li key={index}>
            <h4>{experience.title}</h4>
            <p className="company">{experience.company}</p>
            <p className="years">{experience.years}</p>
            <ul>
              {experience.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience;