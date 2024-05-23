import React from 'react';
import './Education.css';

const Education = ({ education }) => {
  return (
    <div className="section">
      <h3>Education</h3>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <h4>{edu.degree}</h4>
            <p className="university">{edu.university}</p>
            <p className="years">{edu.years}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;