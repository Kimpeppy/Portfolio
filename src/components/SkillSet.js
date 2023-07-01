import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import Graph from '../components/Graph';
import CardText from '../components/CardText';

const SkillSet = ({ skill }) => {
  const { language, knowledge, hasDone } = skill;

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Graph percent={knowledge} />
          </ListGroup.Item>
          <ListGroup.Item className='cards'>
            <CardText text={language} />
          </ListGroup.Item>
          <ListGroup.Item className='cards'>
            <CardText text={hasDone} />
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default SkillSet;