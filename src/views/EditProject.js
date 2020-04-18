import React, { useState, useEffect } from 'react';
import history from '../history';
import _ from 'lodash';
import {connect} from 'react-redux'
import { responseInterceptor } from '../interceptor';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { removeFromReduxStateProject } from '../store/actions/project/projectAction';


const EditProject = (props) => {
  
  useEffect(() => {
    if(!props.loggedIn || _.isEmpty(project)) {
      history.push('/my-profile')
    }
  }, []);


  const project = props.project;
  const [input, setInput] = useState({
    projectId: project._id,
    name: project.name,
    location: project.location,
    shortDescription: project.shortDescription,
    description: project.description,
    area: project.area,
    professionalsNeeded: project.professionalsNeeded,
    comments: project.comments
  });
  
  const [prof, setProf] = useState('');
  const [ar, setArea] = useState('');

  function deleteArea(index) {
    input.area.splice(index, 1)
    setInput({
      ...input, 
      area: input.area
    })
  }

  function addArea(){
    setInput({
      ...input, 
      area: [...input.area, ar]
    })
    setArea('')
  }

  function deleteProfNeeded(index) {
    input.professionalsNeeded.splice(index, 1)
    setInput({
      ...input, 
      professionalsNeeded: input.professionalsNeeded
    })
  }

  function deleteComment(index) {
    input.comments.splice(index, 1)
    setInput({
      ...input, 
      comments: input.comments
    })
  }


  function onSubmit() {
      // responseInterceptor();
      axios.put('http://localhost:3000/projects/edit', input, {withCredentials:true})
        .then( res => {
            history.push('/my-profile')
          })
          .catch( err => {
              console.log(err)
            })
        }

  function addProfNeeded(){
    setInput({
      ...input, 
      professionalsNeeded: [...input.professionalsNeeded, prof]
    })
    setProf('')
  }

  const style={
    ul: {listStyleType:'none', color:'black', fontWeight:'400', fontSize:'16px'},
    i: {marginLeft: '1rem', fontSize: '10px'}
  }

  return (
    <div>
      <Container>
        <h2 style={{marginBottom: '5rem'}} >Share your idea with others and find your dream team</h2>
        
        <form style={{fontWeight: '400', color: 'black'}}>
          <div className="form-group">
            <label htmlFor="projectName">Project name</label>
            <input
              value={input.name}
              onChange={e => setInput({...input, name: e.target.value})} 
              type="text" 
              className="form-control" 
              id="projectName" 
              aria-describedby="passwordHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="loaction">Location</label>
            <input 
              value={input.location}
              onChange={e => setInput({...input, location: e.target.value})} 
              type="text" 
              className="form-control" 
              id="loaction" 
              aria-describedby="passwordHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="bioTextArea">Short description</label>
            <textarea
              value={input.shortDescription}
              onChange={e => setInput({...input, shortDescription: e.target.value})} 
              className="form-control" 
              id="bioTextArea" 
              rows={3} 
              defaultValue={""} />
          </div>
          <div className="form-group">
            <label htmlFor="bioTextArea">Description</label>
            <textarea 
              value={input.description}
              onChange={e => setInput({...input, description: e.target.value})} 
              className="form-control" 
              id="bioTextArea" 
              rows={6} 
              defaultValue={""} />
          </div>
          <Row>
            <Col lg='6'>
              <label htmlFor="bioTextArea">Areas</label> 
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button 
                    onClick={() => addArea()}
                    type="button" 
                    className="btn btn-warning">
                      Add
                  </button>
                </div>
                <input 
                  onChange={e => setArea(e.target.value)} 
                  type="text" 
                  className="form-control" 
                  placeholder="" 
                  aria-label="Example text with button addon" 
                  aria-describedby="button-addon1" />
              </div>
            </Col>
            <Col>
              <label htmlFor="bioTextArea">Professionals needed:</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button 
                    onClick={() => addProfNeeded()}
                    type="button" 
                    className="btn btn-warning">
                      Add
                  </button>
                </div>
                <input 
                  onChange={e => setProf(e.target.value)} 
                  type="text" 
                  className="form-control" 
                  placeholder="" 
                  aria-label="Example text with button addon" 
                  aria-describedby="button-addon1" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg='6'>
              <ul style={style.ul}> 
                {input.area.map((a, index) => {
                  return(
                    <li key={index}>
                      {a}
                      <i onClick={() => deleteArea(index)} className="fa fa-times" style={style.i} />
                    </li>
                  )
                })}
              </ul>
            </Col>
            <Col>
              <ul style={style.ul}> 
                {input.professionalsNeeded.map((prof, index) => {
                  return(
                    <li key={index}>
                      {prof}
                      <i onClick={() => deleteProfNeeded(index)} className="fa fa-times" style={style.i} />
                    </li>
                  )
                })}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>
                Comments
              </h5>
              <ul style={style.ul}>
                {input.comments && input.comments.map( (commentObj, index) => {
                  return (
                    <li key={index}>
                      {commentObj.comment} 
                      <i onClick={() => deleteComment(index)} className="fa fa-times" style={style.i} />
                    </li>
                  )        
                })}
              </ul>
            </Col>
          </Row>
          <button 
            onClick={onSubmit} 
            style={{marginTop:'3rem'}} 
            type="button" 
            className="btn btn-primary">
              Submit
          </button>
        </form>
      </Container>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    removeProjectFromReduxStore: () => { dispatch(removeFromReduxStateProject()) }
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authReducer.loggedIn,
    project: state.projectReducer.project
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
