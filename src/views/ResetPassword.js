import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import { connect } from "react-redux";
import axios from "axios";
import { Container, Col, Row } from 'react-bootstrap';


class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      password: '',
      passwordRepeat: '',
      error: ''
    }
  }
  
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handlePasswordRepeatChange = (event) => {
    this.setState({
      passwordRepeat: event.target.value
    })
  }

  handleSubmit = (event) => {
    if (this.state.password === this.state.passwordRepeat) {
      axios.post('http://localhost:3000/auth' + window.location.pathname, { password: this.state.password }, { withCredentials: true })
        .then( res => {
          history.push('/')
        })
        .catch( err => {
          this.state.error = err.response.data.message
        })
    } else {
      this.setState({
        error: 'Repeated password doesnt match'
      })
    }
  }

  render () {
    return (
      <div className="App">
        <Container>
          <Row className="justify-content-md-center">
            <Col lg='7' sm='12'>
              <h1>Reset Your Password</h1>
              <form style={{fontWeight: '400', color: 'black'}}>
                <div className="form-group">
                  <label htmlFor="passwordInput1">New Password</label>
                  <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className="form-control" id="passwordInput1" aria-describedby="passwordHelp" />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordInput2">Repeat password</label>
                  <input type="password" value={this.state.passwordRepeat} onChange={this.handlePasswordRepeatChange} className="form-control" id="passwordInput2" aria-describedby="passwordHelp" />
                </div>
                {this.state.error ? 
                    <div class="alert alert-danger" role="alert">
                      {this.state.error}
                    </div>
                    :
                    <span></span>
                  }
                <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
              </form>
            
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}


export default ResetPassword;
