import React, { useState, useEffect} from "react";
import axios from 'axios';
// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Navbar from "../components/HeaderMenu/NavBar";
import ProfilePageHeader from "../components/Headers/ProfilePageHeader.js";
import ProjectsCarousel from "../components/ProfilePage/ProjcetsCarousel"
import Footer from "../components/Footer/Footer";
import ProjectCard from './../components/Projects/ProjectCard';


function ProfilePage() {
  
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get('http://localhost:3000/users' + window.location.pathname)
      .then( res => {
        setUser(res.data.user)
        setProjects(res.data.projects)
      })
      .catch( err => {
        console.log(err)
      })  
  }, []);

  return (
    <>
      <Navbar />
      <ProfilePageHeader user={user}/>
      <div className="section profile-content">
        <Container>
          {user.bio 
            && 
          <Row style={{marginTop: '4rem', marginBottom:'4 rem'}}>
            <Col>
              <h3 style={{color: 'black'}}>About me</h3> <br/>
              <p>
                {user.bio}
              </p>
            </Col>
          </Row>
          }
          {projects.length > 0
            &&
          <Row style={{marginTop:'3rem'}}>
            <Col>
              <h3 style={{color: 'black'}}>Here are my projects:</h3> <br/>
              <ProjectsCarousel projects={projects}/>
            </Col>
          </Row>
          }
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
