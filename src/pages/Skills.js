import React, { Component } from 'react';
import {useState, useEffect} from 'react';
import SkillSet from '../components/SkillSet';

const Skills = (props) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkills = async() => {
      const skillsFromServer = await fetchSkills()
      setSkills(skillsFromServer)
    }
    getSkills()
  }, []) 

  const fetchSkills = async() => {
    const res = await fetch('http://localhost:5000/skills')
    const data = await res.json()
    return data
  }
  return (
    <div className='skills'>
      {skills.map((skill) => (
        <div key={skill.language} className='skill-set'>
          <h3>{skill.language}</h3>
          <p>Knowledge: {skill.knowledge}</p>
          <p>Has Done: {skill.hasDone}</p>
        </div>
      ))}
    </div>
  )
}

export default Skills
