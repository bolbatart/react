import React, { useState, useEffect } from 'react';
import history from '../history';

import {connect} from 'react-redux'
import { responseInterceptor } from '../interceptor';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';



const CreateProject = (props) => {
  const [input, setInput] = useState({
    name: '',
    location: '',
    shortDescription: '',
    description: '',
    area: [],
    professionalsNeeded: []
  });
  
  const [prof, setProf] = useState('');
  const [ar, setArea] = useState('');

  useEffect(() => {
    if(!props.loggedIn) {
      history.push('')
    }
  }, []);

  function onSubmit() {
    responseInterceptor();
    axios.post('http://localhost:3000/projects/create', input, {withCredentials:true})
      .then( res => {
        window.close();
      })
      .catch( err => {
        console.log(err)
      })
  }

  return (
    <div>
      <Container>
        <h2 style={{marginBottom: '5rem'}} >Share your idea with others and find your dream team</h2>
        
        <form style={{fontWeight: '400', color: 'black'}}>
          <div className="form-group">
            <label htmlFor="projectName">Project name</label>
            <input onChange={e => setInput({...input, name: e.target.value})} type="text" className="form-control" id="projectName" aria-describedby="passwordHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="loaction">Location</label>
            <input onChange={e => setInput({...input, location: e.target.value})} type="text" className="form-control" id="loaction" aria-describedby="passwordHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="bioTextArea">Short description</label>
            <textarea onChange={e => setInput({...input, shortDescription: e.target.value})} className="form-control" id="bioTextArea" rows={3} defaultValue={""} />
          </div>
          <div className="form-group">
            <label htmlFor="bioTextArea">Description</label>
            <textarea onChange={e => setInput({...input, description: e.target.value})} className="form-control" id="bioTextArea" rows={6} defaultValue={""} />
          </div>
          <Row>
            <Col lg='6'>
              <label htmlFor="bioTextArea">Areas</label> 
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button 
                    onClick={
                      () => {
                        setInput({
                          ...input, 
                          area: [...input.area, ar]
                        })
                        setArea('')
                      }
                    }
                    type="button" 
                    className="btn btn-warning">
                      Add
                  </button>
                </div>
                <input onChange={e => setArea(e.target.value)} type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
              </div>
            </Col>
            <Col>
              <label htmlFor="bioTextArea">Professionals needed:</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button 
                    onClick={
                      () => {
                        setInput({
                          ...input, 
                          professionalsNeeded: [...input.professionalsNeeded, prof]
                        })
                        setProf('')
                      }
                    }
                    type="button" 
                    className="btn btn-warning">
                      Add
                  </button>
                </div>
                <input onChange={e => setProf(e.target.value)} type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg='6'>
              <ul>
                {input.area.map((a, index) => {
                  return(
                    <li key={index}>{a}</li>
                  )
                })}
              </ul>
            </Col>
            <Col>
              <ul>
                {input.professionalsNeeded.map((prof, index) => {
                  return(
                    <li key={index}>{prof}</li>
                  )
                })}
              </ul>
            </Col>
          </Row>
          <button onClick={onSubmit} style={{marginTop:'3rem'}} type="button" className="btn btn-primary">Submit</button>
        </form>
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authReducer.loggedIn
  };
}

export default connect(mapStateToProps)(CreateProject);
