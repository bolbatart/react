import React, { useState, useEffect} from "react";
import axios from 'axios';

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';


// core components
import Navbar from "../components/HeaderMenu/NavBar";
import Footer from "../components/Footer/Footer";
import ProjectsListHeader from '../components/Headers/ProjectsListHeader';
// import Pagination from './../components/Pagination';
import ProjectsList from './../components/Projects/ProjectsList';
import ProjectsHeader from 'components/Projects/ProjectHeader';
import Pagination from '@material-ui/lab/Pagination';
import styled from "styled-components";

function Projects() { 
  
  const [projects, setProjects] = useState([]);
  
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = projects.slice(indexOfFirstPost, indexOfLastPost);
  // change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    axios.get('http://localhost:3000/projects')
      .then(res => {
        setProjects(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);


  const handleFilterSubmit = ({area, availablePosition, location, nameKeyWord}) => {
    axios.get('http://localhost:3000/projects/' + area + '/' + availablePosition + '/' + location + '/' + nameKeyWord)
      .then(res => {
        setProjects(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <StyledProjects>
      {/* <ProjectsListHeader handleSubmit={handleFilterSubmit} /> */}
      <ProjectsHeader />
      <div className="projects-container">
        
        <div className="projects-list">
          <h2 className='projects-list__title'>Find an existing project to work on!</h2>
         <ProjectsList projects={currentPosts} />
        </div>
        
        <div className="projects-pagination">
          <Pagination count={10} />
        </div>
      </div>



      {/* MAIN */}
      {/* <div>
        <Container>
          
          <Row style={{marginTop: '4rem', marginBottom:'4 rem'}}>
            <Col>
              <h4>Sort by</h4>
              <Form style={{marginTop: '2rem'}}>
                <Row>
                  <Col>
                    <Form.Label style={blackText}>Project area</Form.Label>
                    <Form.Control as="select" value="any">
                      <option>any</option>
                    </Form.Control>                  
                  </Col>
                  <Col>
                    <Form.Label style={blackText}>Available positions</Form.Label>
                    <Form.Control as="select" value="-">
                      <option>any</option>
                    </Form.Control>                  
                  </Col>
                  <Col>
                    <Form.Label style={blackText}>Country</Form.Label>
                    <Form.Control as="select" value="-">
                      <option>any</option>
                    </Form.Control>                  
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>

          <ProjectsList projects={currentPosts} />

          <Pagination 
            postsPerPage={postsPerPage}
            totalPosts={projects.length}
            paginate={paginate} />

        </Container>
      </div> */}
      {/* <Footer /> */}
    </StyledProjects>
  );
}

export default Projects;

const StyledProjects = styled.div`
  padding: 0 0 64px;
  .projects-pagination {
    display: flex;
    justify-content: center;
  }

  .projects-list {
    margin: 64px 128px;
    &__title{
      margin: 0 0 48px;
    }
  }

  @media (max-width: 1024px) {
    .projects-list {
      margin: 64px;
    } 
  }
`;
