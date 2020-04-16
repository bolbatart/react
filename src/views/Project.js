import React from 'react';

import ProjectHeader from './../components/Headers/ProjectHeader';
import NavBar from './../components/Navbar/NavBar';
import Footer from '../components/Footer/Footer';
import { Container, Col, Row } from 'reactstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Project(props){
  
  const [project, setProject] = useState({});
  // const [profNeeded, setProfNeeded] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000' + window.location.pathname)
      .then( res => {
        setProject(res.data)
        // setProfNeeded(res.data.professionalsNeeded)
      })
      .catch( err => {
        console.log(err)
      })  
  }, []);


  const blackText = {color:'black', fontWeight:'400'}
  return (
    <div>
      <NavBar />
      <ProjectHeader projectName={project.name} /> 
      <Container style={{marginTop:'4rem'}}>
        <h3 align='center'>
          Shortly about this idea
        </h3> <br/>
        <p align='center'>
          {project.shortDescription}
        </p>
        <Row style={{marginTop:'2rem'}}>
          <Col md={{ size: 5, order: 2 }} >
            <h4 style={blackText} >Job Positions</h4>
            <ul style={{listStyleType:'none', color:'black', fontWeight:'400'}}>
              {
                project.professionalsNeeded &&
                project.professionalsNeeded.map(prof => <li key={prof}>{prof}</li>)
              }
            </ul>
          </Col>
          <Col md={{ size: 7, order: 1 }}>
            <h4 style={blackText}>More Information</h4>
            <p style={blackText}>
              {project.description}
            </p>
          </Col>  
        </Row>
        <Row style={{marginTop:'5rem'}}>
          <Col>
            <h4 style={blackText}>
              Comments
            </h4>
            ...
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Project;
