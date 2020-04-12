import React from "react";
import { Row } from 'react-bootstrap';


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
                      {props.user.firstName} {props.user.lastName}
                    </h4>
                    <h6 style={{color:"white"}} className="description">Music Producer</h6>
                  </div>  
                </Col>
              </Row>
              <Row style={{marginTop:'1rem', marginBottom:'2rem'}}>
                <Col className="ml-auto mr-auto text-center" md="6">
                  <p style={{color: 'white'}}>
                    Email: {props.user.email}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>  
    </>
  );
}

export default ProfilePageHeader;
