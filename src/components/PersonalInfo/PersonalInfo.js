import React from 'react';

const PersonalInfo = ({ personalInfo }) => {
  return (
    <div className="section">
      <h3>Summary</h3>
      <p>{personalInfo.summary}</p>
    </div>
  );
};

export default PersonalInfo;