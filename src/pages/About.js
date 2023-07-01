import React from 'react';
import Image from 'react-bootstrap/Image';
import '../App.css';
import avatar from './avatar.png';


const About = () => {
  return (
    <>
      <div className='aboutMe'>
        <Image src={avatar} roundedCircle/>
        <h1>About me</h1>
        <h2>Hi my name is Michael Kim and I am a computer science major at Johns Hopkins University.</h2>
        <h2> I am passionate in problem solving, machine learning, and web development.</h2>
        <h2> I am an expert in many language such as Java, Python, and C++</h2>
        <h1> Education</h1>
        <h1 className='college'> Johns Hopkins University</h1>
        <h2> 2021-2025</h2>
        <h2>Related Courses: Data Structures, Computer Science Fundementals, Artificial Intelligence, Intro to Probability</h2>
      </div>
    </>

  )
};

export default About;