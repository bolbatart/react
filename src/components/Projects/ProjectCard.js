import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectCard = (props) => {
  return (
    <div style={{marginBottom:'3rem'}}>
      <Container className="themed-container" fluid={true} >
        <Row>
          <Col md='6'>
            <img src={require("../../assets/img/home-page.jpg")} alt="asd"/>
          </Col>
          <Col md='6'>
            <h5>Professionals needed:</h5>
            <ul style={{'list-style-type':'none', color:'black', fontWeight:'400'}}>
              {props.project.professionalsNeeded &&
              props.project.professionalsNeeded.map(prof =>
                <li key={prof}>{prof}</li>
              )}
            </ul>
          </Col>
        </Row>
          <h3>Project name</h3>
          <CardText>
            {props.project.shortDescription}
          </CardText>
          <Row>
            <Col>
              <Button>More Info</Button>
            </Col>
            <div className="col-auto">
              <p>Location: {props.project.location}</p>
            </div>
          </Row>
      </Container>
    </div>
  );
};

export default ProjectCard;