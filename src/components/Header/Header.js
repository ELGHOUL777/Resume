import React from 'react';
import './Header.css';

const Header = ({ personalInfo }) => {
  return (
    <div className="header">
      <h1>{personalInfo.name}</h1>
      <h2>{personalInfo.title}</h2>
      <p>
        {personalInfo.location} | {personalInfo.email} | {personalInfo.phone}
      </p>
      <ul className="social-links">
        {personalInfo.linkedin && (
          <li>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        )}
        {personalInfo.github && (
          <li>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;