import React from 'react';
import ProjectsListCard from './ProjectsListCard';

import { Row, Col } from 'react-bootstrap';

const ProjectsList = ({ projects }) => {
  
  return (
    <Row style={{marginTop:'3rem'}}>
      <h2 style={{marginBottom:'2rem'}} >Find an existing project to work on!</h2>
      {projects.map(project => {
        return (
          <Col lg='6' sm='12' key={project._id}>
            <ProjectsListCard project={project} />
          </Col>
        )
      })}
    </Row>
  )
};

export default ProjectsList;