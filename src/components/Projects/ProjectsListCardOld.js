import React from 'react';
import history from '../../history'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import CardImg from "assets/img/home-page.jpg";

const ProjectsListCard = ({ project }) => {
  
  const blackText = {
    color:'black', 
    fontWeight:'400'
  }
  const ulStyle = {
    listStyleType:'none', 
    listStylePosition:'inside', 
    margin:'0', 
    padding: '0rem', 
    color:'black', 
    fontWeight:'400'
  }
  return (
    <Card >
      <Card.Img variant="top" src={CardImg} />
      <Card.Body>
        <h3> {project.name} </h3>
        <p> {project.shortDescription} </p>
        <Row>
          <Col>
            <h4>Positions available</h4>
            <ul style={ulStyle}>
              {project.professionalsNeeded && project.professionalsNeeded.map(pos => {
                return (
                  <li key={pos}> {pos} </li>
                )
              })}
            </ul>
          </Col>
          <Col>
            <h4>Area</h4>
            <ul style={ulStyle}>
              {project.area && project.area.map(area => {
                  return (
                    <li key={area}> {area} </li>
                  )
                })}
            </ul>
          </Col>
        </Row>
        <Row style={{marginTop:'3rem'}}>
          <Col>
            <p> {project.location} </p>
          </Col>
          <Col>
            <Button 
              className='float-right' 
              variant="primary" 
              onClick={() => history.push('/projects/' + project._id)} >
                Find out more
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProjectsListCard;
