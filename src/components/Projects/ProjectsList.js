import React from 'react';
import ProjectsListCard from './ProjectsListCard';

import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const ProjectsList = ({ projects }) => {
  
  return (
    <StyledProjectsList>
      <div className="pr-list">
       
        <div className="pr-list__container">
          <ProjectsListCard />
          <ProjectsListCard />
          <ProjectsListCard />
          <ProjectsListCard />
          <ProjectsListCard />

          {/* {projects.map(project => {
            return (
                <ProjectsListCard project={project} />
            )
          })} */}
        </div>
      </div>
    </StyledProjectsList>
  )
};

export default ProjectsList;

const StyledProjectsList = styled.div`
  /* padding: 128px 128px 64px; */

  .pr-list {
    &__title {
      margin: 0 0 64px;
    }
    
    &__container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 64px;
    } 
  }



`;