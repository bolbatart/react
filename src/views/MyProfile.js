import React, { useState, useEffect} from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import history from '../history';
import '../index.css';
import { responseInterceptor } from '../interceptor';
import { removeFromReduxStateProject } from '../store/actions/project/projectAction'



// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

import { Spinner } from 'react-bootstrap';

// core components
import Navbar from "../components/Navbar/NavBar";
import ProfilePageHeader from "../components/Headers/ProfilePageHeader.js";
import ProjectsCarousel from "../components/ProfilePage/ProjcetsCarousel"
import Footer from "../components/Footer/Footer";


function MyProfile(props) {
  
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    props.removeProjectFromReduxStore()
    if(props.loggedIn) {
      axios.get('http://localhost:3000/users/profile/' + props.loggedIn)
        .then( res => {
          setUser(res.data.user)
          setProjects(res.data.projects)
          setLoading(false);
        })
        .catch( err => {
          console.log(err)
        })  
    }
    else {
      history.push('')
    }
  }, []);

  function addProject() {
    window.open('http://localhost:4200/create-project', "_blank")
  }

  return (
    <>
    {loading ? <p>Loading...</p>
      :
      <React.Fragment>
        <Navbar />
        <ProfilePageHeader fromMyProfile={true} user={user}/>
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
            <Row style={{marginTop: '4rem'}}>
              <Col className="ml-auto mr-auto text-center" lg='12'>
              <button
                onClick={() => addProject()}
                type="button" 
                class="btn btn-warning btn-circle btn-xl">
                  <i class="fa fa-plus"></i>
              </button>
              <h4>Add project</h4>
              </Col>
            </Row>
            {projects.length > 0
              &&
              <Row style={{marginTop:'3rem'}}>
              <Col>
                <h3 style={{color: 'black'}}>Here are my projects:</h3>
                <ProjectsCarousel fromMyProfile={true} projects={projects}/>
              </Col>
            </Row>
            }
          </Container>
        </div>
        <Footer />
      </React.Fragment>
    }
    </>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authReducer.loggedIn
  };
}

const mapDispatchToProps = dispatch => {
  return {
    removeProjectFromReduxStore: () => { dispatch(removeFromReduxStateProject()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
