import React from 'react';
import Header from './components/Header/Header';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';

const App = () => {
  const personalInfo = {
    name: 'Christopher El Ghoul',
    title: 'Software Engineer',
    location: 'New York, NY',
    email: 'christopherghoul@gmail.com',
    phone: '(123) 456-7890',
    linkedin: 'https://www.linkedin.com/in/john-doe/',
    github: 'https://github.com/elghoul777',
    summary:
      'Software Engineer with experience in full-stack development and proficient in React, Node.js, and Python. Skilled in software design, debugging, and performance optimization. Strong knowledge of RESTful APIs, OOP, and databases.',
  };

  const workExperience = [
    {
      title: 'Software Engineer',
      company: 'Google',
      years: '2018 - Present',
      description: [
        'Designed and developed features for the company dashboard.',
        'Improved API response times by implementing server-side caching.',
        'Resolved high-priority bugs reported by the end-users.',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Facebook',
      years: '2017 - 2018',
      description: [
        'Assisted in developing and improving various parts of the platform.',
        'Implemented unit tests to improve code quality.',
        'Optimized SQL queries for faster database operations.',
      ],
    },
  ];

  const education = [
    {
      degree: 'B.S. in Computer Science',
      university: 'Harvard University',
      years: '2014 - 2018',
    },
    {
      degree: 'B.S. in Mathematics',
      university: 'University of California, Los Angeles',
      years: '2011 - 2014',
    },
  ];

  const skills = [
    'JavaScript',
    'Python',
    'React',
    'Node.js',
    'OOP',
    'RESTful APIs',
    'SQL',
    'Git',
  ];

  return (
    <div className="container">
      <Header personalInfo={personalInfo} />
      <PersonalInfo personalInfo={personalInfo} />
      <WorkExperience workExperience={workExperience} />
      <Education education={education} />
      <Skills skills={skills} />
    </div>
  );
};

export default App;