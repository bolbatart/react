import React, { useState } from "react";
import { Row, Modal } from 'react-bootstrap';
import axios from 'axios';
import { responseInterceptor } from '../../interceptor';

import history from '../../history';

import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  // Row,
  Col
} from "reactstrap";


function ProfilePageHeader(props) {
  const [profile, setProfile] = useState({
    userId: props.user._id,
    firstName: props.user.firstName,
    lastName: props.user.lastName,
    bio: props.user.bio,
    email: props.user.email
  });

  const [showModal, setShowModal] = useState(false);

  function editProfile() {
    // responseInterceptor()
    axios.post('http://localhost:3000/users/edit-profile/', profile, {withCredentials:true})
      .then(res => {
        window.location.reload(false);
      })
      .catch(err => {
        console.log(err)
      })
  } 

  return (
    <>
      <div style={{backgroundColor:'#132234'}} className='page-header page-header-xs'>
        <Container >
          <Row className='justify-content-md-center'>
            <Col lg='8' sm='12' style={{marginTop:'3rem'}}>
              <Row className='justify-content-md-center'>
                <Col className="ml-auto mr-auto text-center" lg='4' md='4' xs='4'>
                  <div className="avatar">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("../../assets/img/faces/joe-gardner-2.jpg")}
                    />
                  </div>
                  <div className="name">
                    <h4 className="title">
                      {profile.firstName} {profile.lastName}
                    </h4>
                  </div>  
                </Col>
              </Row>
              <Row style={{marginTop:'1rem', marginBottom:'2rem'}}>
                <Col className="ml-auto mr-auto text-center" md="6">
                  <p style={{color: 'white'}}>
                    Email: {profile.email}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          {props.fromMyProfile &&
            <React.Fragment>
            <Button onClick={() => setShowModal(true)} color="warning" style={{float: 'right', color:'black', marginBottom:'2rem'}} >Edit profile</Button>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header>
                <Modal.Title>Edit profile</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{fontWeight: '400'}}>
                <form>
                  <div className="form-group">
                    <label htmlFor="firstName">First name</label>
                    <input value={profile.firstName} onChange={e => setProfile({...profile, firstName: e.target.value})} type="text" className="form-control" id="projectName" aria-describedby="passwordHelp" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last name</label>
                    <input value={profile.lastName} type="text" onChange={ e => setProfile({...profile, lastName: e.target.value}) } className="form-control" id="lastName" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="bio">Abuot you</label>
                    <textarea value={profile.bio} onChange={ e => setProfile({...profile, bio: e.target.value}) } className="form-control" id="bioTextArea" rows={3} defaultValue={""} />
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer style={{margin: 'auto',}}>
                <Button onClick={editProfile} className="btn-round" color="success" variant="primary" >
                  Submit
                </Button>
                <Button onClick={() => setShowModal(false)} className="btn-round" color="danger" variant="secondary" >
                  Close
                </Button>              
              </Modal.Footer>
            </Modal>
          </React.Fragment>
            // EDIT MODAL
          }
        </Container>
      </div>  
    </>
  );
}

export default ProfilePageHeader;
