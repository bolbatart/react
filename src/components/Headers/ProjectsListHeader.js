import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import axios from 'axios';


function ProjectsHeader({ handleSubmit }) {

  const [filters, setFilters] = useState({});
  const [params] = useState({
    area: 'any',
    availablePosition: 'any',
    location: 'any',
    nameKeyWord: 'any'
  });

  useEffect(() => {
    axios.get('http://localhost:3000/projects/filter-parameters')
      .then(res => {
        setFilters(res.data)
      })
      .catch(err => console.log(err))
  }, []);

    


  // styles
  const whiteText = {color:'white', fontWeight:'400'}
  const formRows = {marginBottom: '1rem'}
  return (
    <>
      <div style={{backgroundColor:'#132234'}} className='page-header page-header-xs'>
        <Container >
          <Row className='justify-content-md-left'>
            <Col lg='8' style={{marginTop:'3rem'}}>
              <div className="name">
                <h4 className="title">
                  Find Projects
                </h4>
              </div>
              <Form>
                <Row style={formRows}>
                  <Col>
                    <Form.Label style={whiteText}>Search</Form.Label>
                    <Form.Control placeholder="Key words" onChange={e => params.nameKeyWord = e.target.value} />
                  </Col>
                  <Col>
                    <Form.Label style={whiteText}>Project area</Form.Label>
                    <Form.Control as="select" onChange={e => params.area = e.target.value} >
                      <option>any</option>
                      {filters.areas && filters.areas.map(area => 
                        <option key={area}>{area}</option>
                        )}
                    </Form.Control>
                  </Col>
                </Row>
                <Row style={formRows}>
                  <Col>
                    <Form.Label style={whiteText}>Available positions</Form.Label>
                    <Form.Control as="select" onChange={e => params.availablePosition=e.target.value} >
                      <option>any</option>
                      {filters.availablePositions && filters.availablePositions.map(availablePosition => 
                        <option key={availablePosition}>{availablePosition}</option>
                        )}
                    </Form.Control>                  
                  </Col>
                  <Col>
                    <Form.Label style={whiteText}>Country</Form.Label>
                    <Form.Control as="select" onChange={e => params.location=e.target.value} >
                      <option>any</option>
                      {filters.locations && filters.locations.map(location => 
                        <option key={location}>{location}</option>
                        )}
                    </Form.Control>
                  </Col>
                </Row>
                <Row style={formRows}>
                  <Col>
                    <Button onClick={() => handleSubmit(params)} className='float-right' variant="primary">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>  
    </>
  );
}

export default ProjectsHeader;
