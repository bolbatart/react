import React, { Component } from 'react';
import * as loginActions from '../../store/actions/auth/login'
import * as fpActions from '../../store/actions/auth/forgotPassword'
import { connect } from "react-redux";
import { Modal, Container, Row, Col, Spinner } from 'react-bootstrap';
import history from '../../history' 
import { Button } from 'reactstrap'; 


class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      error: '',
      email: '',
      password: '',
      showModal: false,
      showForgotPassword: false, // true - fp, false - login
      fpEmail: ''
    }
  }
  
  // Login
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

  handleSubmit = async () => {
    // Validation
    if (this.state.email === '' || this.state.password === '') {
      this.setState({
        error: 'Input fields must not be empty'
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
    else {
      const credentials = {
        email: this.state.email,
        password: this.state.password
      }
      this.props.onSubmitLogin(credentials, this.handleClose)
    }
  }

  handleClose = () => {
    this.setState({ showModal: false })
  }

  handleShow = () => {
    this.setState({ showModal: true, showForgotPassword: false })
  }


  // Forgot password
  handleFpShow = () => {
    this.setState({ showForgotPassword: !this.state.showForgotPassword })
  }

  handleFpEmailChange = (event) => {
    this.setState({ fpEmail: event.target.value })
  }

  handleFpSubmit = () => {
    this.props.onSubmitForgotPassword({email: this.state.fpEmail}, this.handleClose)
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleShow} className="btn-round" color="danger" outline>
          Log In
        </Button>

        {!this.state.showForgotPassword ? 
        
          <Modal show={this.state.showModal} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{fontWeight: '400'}}>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" value={this.state.email} onChange={this.handleEmailChange} className="form-control" id="exampleInputEmail1" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className="form-control" id="exampleInputPassword1" />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer style={{margin: 'auto',}}>
              {
                this.props.loading ? 
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
                        <a style={{'color': 'red'}} className="form-text">{this.state.error === '' ? this.props.loginError : this.state.error}</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <button type="button" onClick={this.handleFpShow} className="btn btn-link">Forgot password?</button>
                      </Col>
                    </Row>
                  </Container>
              }
            </Modal.Footer>
          </Modal>  
          
          :

          <Modal show={this.state.showModal} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Forgot Password</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{fontWeight: '400'}}>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" value={this.state.fpEmail} onChange={this.handleFpEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <small id="emailHelp" style={{'color': 'red'}} className="form-text">{this.props.error}</small>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer style={{margin: 'auto',}}>
              
            <Container>
                <Row>
                  <Col>
                    <Button className="btn-round" color="success" variant="primary" onClick={this.handleFpSubmit}>
                      Submit
                    </Button>
                    <Button className="btn-round" color="danger" variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>          
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <a style={{'color': 'red'}} className="form-text">{this.props.forgotPasswordError}</a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <button type="button" onClick={this.handleFpShow} className="btn btn-link">Back</button>
                  </Col>
                </Row>
              </Container>
              
            </Modal.Footer>
          </Modal>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authReducer.loggedIn,
    loading: state.authReducer.loading,
    loginError: state.authReducer.loginError,
    forgotPasswordError: state.authReducer.forgotPasswordError
  };
};

const mapDispachToProps = dispatch => {
  return {
    onSubmitLogin: (credentials, handleClose) => { dispatch(loginActions.login(credentials, handleClose))},
    onSubmitForgotPassword: (email, handleClose) => { dispatch(fpActions.forgotPassword(email, handleClose))}
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Login);