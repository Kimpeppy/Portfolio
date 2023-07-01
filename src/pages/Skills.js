import React, { Component } from 'react';
import {useState, useEffect} from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import Graph from '../components/Graph';
import CardText from '../components/CardText';

const Skills = (props) => {
  const [skills, setSkills] = useState([]);
  return (
    <div className='skills'>
      <Card style={{ width: '18rem' }}>
        <ListGroup variant="flush">
          <ListGroup.Item>
              <Graph percent="70%"/>
          </ListGroup.Item>
          <ListGroup.Item className='cards' text= "Python">
            <CardText text="Python"/>
          </ListGroup.Item>
          <ListGroup.Item className='cards'>
            <CardText text= "Used in Artificial Intelligence Projects"/>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  )
}

export default Skills
