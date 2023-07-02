import React, { Component } from 'react';
import {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap'
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
        <Container>
          <div key={skill.language} className='skill-set'>
            <SkillSet language = {skill.language} knowledge = {skill.knowledge} hasDone = {skill.hasDone} />
          </div>
        </Container>
      ))}
    </div>
  )
}

export default Skills
