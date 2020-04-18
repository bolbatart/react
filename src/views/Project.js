import React from 'react';

import ProjectHeader from './../components/Headers/ProjectHeader';
import NavBar from './../components/Navbar/NavBar';
import Footer from '../components/Footer/Footer';
import { Container, Col, Row } from 'reactstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { responseInterceptor } from '../interceptor'; 

function Project(props){
  
  const [project, setProject] = useState({});
  const [comment, setComment] = useState('');
  
  useEffect(() => {
    axios.get('http://localhost:3000' + window.location.pathname)
      .then( res => {
        setProject(res.data)
      })
      .catch( err => {
        console.log(err)
      })  
  }, []);

  function onLike() {
    axios.put('http://localhost:3000' + window.location.pathname + '/like', {}, {withCredentials:true})
      .then(res => {
        setProject(res.data)     
      })
      .catch(err => {
        console.log(err)
      })    
  }

  function onDislike() {
    axios.put('http://localhost:3000' + window.location.pathname + '/dislike', {}, {withCredentials:true})
      .then(res => {
        setProject(res.data)     
      })
      .catch(err => {
        console.log(err)
      })    
  }

  function leaveComment() {
    responseInterceptor()
    axios.post('http://localhost:3000'+ window.location.pathname+'/comment', {comment}, {withCredentials:true})
      .then(res => {
        setProject(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const blackText = {color:'black', fontWeight:'400'}
  return (
    <div>
      <NavBar />
      <ProjectHeader projectName={project.name} like={project.like} dislike={project.dislike} onLike={onLike} onDislike={onDislike} /> 
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

        {/* COMMETNS */}
        <Row style={{marginTop:'5rem'}}>
          <Col>
            <h4 style={blackText}>
              Comments
            </h4>
            <ul>
              {project.comments && project.comments.map( (commentObj, index) => {
                return (
                  <li key={index}> {commentObj.comment} </li>
                )        
              })}
            </ul>
          </Col>
        </Row>
        {/* Leave your comment */}
        <Row>
          <Col>
            <label style={{color:'black', fontWeight:'400'}} htmlFor="bioTextArea">Leave your comment</label> 
            <div className="input-group mb-3">
              <textarea onChange={e => setComment(e.target.value)} className="form-control" id="bioTextArea" rows={1} defaultValue={""} />
              <div className="input-group-prepend">
                <button onClick={leaveComment} type="button" className="btn btn-warning"> Comment </button>
              </div>
            </div>
          </Col>
        </Row>
        
      </Container>
      <Footer />
    </div>
  );
}

export default Project;
