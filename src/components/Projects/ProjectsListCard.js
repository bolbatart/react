import React from 'react';

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';


const ProjectsListCard = ({ project }) => {
  
  const blackText = {
    color:'black', 
    'font-weight':'400'
  }
  const ulStyle = {
    'list-style-type':'none', 
    'list-style-position':'inside', 
    margin:'0', 
    padding: '0rem', 
    color:'black', 
    fontWeight:'400'
  }
  return (
    <Card >
      <Card.Img variant="top" src={require("../../assets/img/home-page.jpg")} />
      <Card.Body>
        <h3> {project.name} </h3>
        <p> {project.shortDescription} </p>
        <Row>
          <Col>
            <h4>Positions available</h4>
            <ul style={ulStyle}>
              <li>Designer</li>
              <li>Back-end developer</li>
            </ul>
          </Col>
          <Col>
            <h4>Area</h4>
            <ul style={ulStyle}>
              <li>Designer</li>
              <li>Back-end developer</li>
            </ul>
          </Col>
        </Row>
        <Row style={{marginTop:'3rem'}}>
          <Col>
            <p>Location</p>
          </Col>
          <Col>
            <Button className='float-right' variant="primary">Find out more</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProjectsListCard;
