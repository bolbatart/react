import React, { useState, useEffect} from "react";
import axios from 'axios';

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';


// core components
import Navbar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import ProjectsListHeader from '../components/Headers/ProjectsListHeader';
import Pagination from './../components/Pagination';
import ProjectsList from './../components/Projects/ProjectsList';

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

  // styles
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
    <>
      <Navbar />
      <ProjectsListHeader handleSubmit={handleFilterSubmit} />
      <div>
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
      </div>
      <Footer />
    </>
  );
}

export default Projects;
