import React, { useState } from 'react';
import axios from 'axios';
import history from '../../history';
import { addToReduxStateProject } from '../../store/actions/project/projectAction'
import { connect } from "react-redux";

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { responseInterceptor } from './../../interceptor';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/auth/logout';



const ProjectCard = (props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deleteError, setDeleteError] = useState('')

  function deleteProject() {
    responseInterceptor();
    axios.delete('http://localhost:3000/projects/delete/' + props.project._id, { withCredentials:true })
      .then(res => {
        window.location.reload(false);
      })
      .catch(err => {
        console.log('error')
      })
  }

  function onEdit() {
    props.addProjectToReduxStore(props.project)
    history.push('/edit-project')
  }
  
  return (
    <div style={{marginBottom:'3rem'}}>
      <Container className="themed-container" fluid={true} >
        <Row>
          <Col md='6'>
            <img src={require("../../assets/img/home-page.jpg")} alt="asd"/>
          </Col>
          <Col md='4' xs='9' sm='9'>
            <h5>Professionals needed:</h5>
            <ul style={{listStyleType:'none', color:'black', fontWeight:'400'}}>
              {props.project.professionalsNeeded &&
              props.project.professionalsNeeded.map(prof =>
                <li key={prof}>{prof}</li>
              )}
            </ul>
          </Col>
          {props.fromMyProfile && 
            <div className='col-auto'>
              {/* Edit */}
              <i 
                class="fa fa-pencil fa-2x" 
                style={{marginRight: '1rem'}} 
                aria-hidden="true" 
                onClick={onEdit}
                />
              
              {/* Delete */}
              <i 
                class="fa fa-trash-o fa-2x"
                type='btn'
                aria-hidden="true" 
                onClick={() => setShowDeleteModal(true)}
              />
              <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(true)}>
                <Modal.Body>
                  <p style={{margin:'2rem', fontWeight:'400'}}>Are you sure you want to delete this project "{props.project.name}"?</p>
                  <p style={{margin:'2rem', color:'red'}}> {deleteError} </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={deleteProject}>
                    Yes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          }
        </Row>
          <h3>Project name</h3>
          <CardText>
            {props.project.shortDescription}
          </CardText>
          <Row>
            <Col>
              <Button onClick={() => history.push('/projects/' + props.project._id)} >More Info</Button>
            </Col>
            <div className="col-auto">
              <p>Location: {props.project.location}</p>
            </div>
          </Row>
      </Container>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addProjectToReduxStore: (project) => { dispatch(addToReduxStateProject(project)) }
  }
}

export default connect(null, mapDispatchToProps)(ProjectCard);