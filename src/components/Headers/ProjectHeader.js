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
          </Container>
        </div>
      </div>  
    </>
  );
}

export default ProjectHeader;
