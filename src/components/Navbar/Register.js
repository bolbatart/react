import React, { Component } from 'react';
import * as actions from '../../store/actions/auth/register'
import { connect } from "react-redux";
import { Modal, Container, Row, Col, Spinner } from 'react-bootstrap';
import { Button } from 'reactstrap'; 


class Register extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      error: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      bio: '',
      showModal: false
    }
  }
  
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }
 
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleFisrtNameChange = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleBioChange = (event) => {
    this.setState({
      bio: event.target.value
    })
  }

  handleSubmit = () => {
    // Validation
    if (
      this.state.email === '' || 
      this.state.password === '' ||
      this.state.firstName === '' ||
      this.state.lastName === ''
      ) {
      this.setState({
        error: 'Required input fields must not be empty'
      })
    }     
    else if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      this.setState({
        error: 'Email must be valid'
      })
    } 
    else if (!this.state.password.match(/^[^%]{6,}$/)) {
      this.setState({
        error: 'Password must be at least 6 characters long'
      })
    }
    //
    const credentials = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      bio: this.state.bio
    }
    this.props.onSubmitRegister(credentials, this.handleClose)
  }

  handleClose = () => {
    this.setState({ showModal: false })
  }

  handleShow = () => {
    this.setState({ showModal: true })
  }


  render() {
    return (
      <div>
      <Button
        onClick={this.handleShow}
        className="btn-round"
        color="secondary"
        >
        Sign Up
      </Button>

      <Modal show={this.state.showModal} onHide={this.handleClose}>
       
        <Modal.Header>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{fontWeight: '400'}}>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address<small style={{'color':'red'}}>*</small></label>
              <input type="email" value={this.state.email} onChange={this.handleEmailChange} className="form-control" id="exampleInputEmail1" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password<small style={{'color':'red'}}>*</small></label>
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group">
              <label htmlFor="inputFirstName">First Name<small style={{'color':'red'}}>*</small></label>
              <input type="text" value={this.state.firstName} onChange={this.handleFisrtNameChange} className="form-control" id="inputFirstName" />
            </div>
            <div className="form-group">
              <label htmlFor="inputLastName">Last Name<small style={{'color':'red'}}>*</small></label>
              <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} className="form-control" id="inputLastName" />
            </div>
            <div className="form-group">
              <label htmlFor="bioTextArea">Bio</label>
              <textarea value={this.state.bio} onChange={this.handleBioChange} className="form-control" id="bioTextArea" rows={3} defaultValue={""} />
            </div>
            <small id="emailHelp" className="form-text text-muted">Input fields marked with <small style={{'color':'red'}}>*</small> are required.</small>
          </form>
        </Modal.Body>
        
        <Modal.Footer style={{margin: 'auto', marginBottom: '2rem'}}>
          {
            this.props.loading 
            ? 
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner> 
            :
            <Container>
              <Row>
                <Col>
                <Button className="btn-round" color="success" variant="primary" onClick={this.handleSubmit}>
                  Submit
                </Button>
                <Button className="btn-round" color="danger" variant="secondary" onClick={this.handleClose}>
                  Close
                </Button> 
                </Col>
              </Row>
              <Row>
                <Col>
                  <a style={{'color': 'red'}} className="form-text">{this.props.registerError}</a>
                </Col>
              </Row>
            </Container>
          }
        </Modal.Footer>

      </Modal>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authReducer.loggedIn,
    loading: state.authReducer.loading,
    registerError: state.authReducer.registerError,
  };
};

const mapDispachToProps = dispatch => {
  return {
    onSubmitRegister: (credentials, handleClose) => dispatch(actions.register(credentials, handleClose)),
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Register);