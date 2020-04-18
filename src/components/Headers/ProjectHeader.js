import React, { useState, useEffect } from "react";
import { Row } from 'react-bootstrap';
import axios from 'axios'
import {connect} from 'react-redux'

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


function ProjectHeader(props) {
  return (
    <>
      <div
        className="page-header page-header-xs section-dark"
        style={{
          backgroundColor: '#195E4F',
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="display-2">{props.projectName}</h1>
            </div>
            {/* DISLIKE BTN */}
            {props.dislike && props.dislike.includes(props.loggedIn) ? 
              <Button
                onClick={props.onDislike}
                size="sm"
                style={{float: 'right', marginTop:'4rem', marginLeft:'1rem'}} 
                className="btn-round mr-1" 
                color="danger"  
                type="button">
                  {props.dislike && props.dislike.length}
                  <i className="fa fa-thumbs-down"></i> 
                  Dislike
              </Button>
             : 
              <Button
                onClick={props.onDislike}
                size="sm"
                style={{float: 'right', marginTop:'4rem', marginLeft:'1rem'}} 
                className="btn-round mr-1" 
                color="danger" 
                outline 
                type="button">
                  {props.dislike && props.dislike.length}
                  <i className="fa fa-thumbs-down"></i> 
                  Dislike
              </Button>
             }
            {/* LIKE BTN */}
            {props.like && props.like.includes(props.loggedIn) ? 
              <Button 
                onClick={props.onLike}
                size="sm"
                style={{float: 'right', marginTop:'4rem'}} 
                className="btn-round mr-1" color="primary"  
                type="button">
                  {props.like && props.like.length}
                  <i className="fa fa-heart"></i> 
                  Like it
              </Button>
              :
              <Button 
                onClick={props.onLike}
                size="sm"
                style={{float: 'right', marginTop:'4rem'}} 
                className="btn-round mr-1" color="primary" 
                outline 
                type="button">
                  {props.like && props.like.length}
                  <i className="fa fa-heart"></i> 
                  Like it
              </Button>
            }
          </Container>
        </div>
      </div>  
    </>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authReducer.loggedIn
  };
}

export default connect(mapStateToProps)(ProjectHeader);
