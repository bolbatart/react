import React, { Component } from 'react';
import * as actions from '../../store/actions/auth/forgotPassword'
import { connect } from "react-redux";
import { Modal } from 'react-bootstrap';
import { Button } from 'reactstrap'; 


class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      showModal: false
    }
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handleSubmit = async () => {
    this.props.onSubmitForgotPassword({email: this.state.email}, this.handleClose)
  }

  handleClose = () => {
    this.setState({ showModal: false })
  }

  handleShow = () => {
    this.props.closeLoginModalHandler()
    this.setState({ showModal: true })
  }


  render() {
    return (
      <div>
        <button type="button" onClick={this.handleShow} className="btn btn-link">Forgot password?</button>

        <Modal show={this.state.showModal} onHide={this.handleClose}>
          
          <Modal.Header>
            <Modal.Title>Forgot Password</Modal.Title>
          </Modal.Header>

          <Modal.Body style={{'font-weight': '400'}}>
             <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" value={this.state.email} onChange={this.handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" style={{'color': 'red'}} className="form-text">{this.props.error}</small>
              </div>
            </form>
          </Modal.Body>
          
          <Modal.Footer style={{margin: 'auto',}}>
          {
            this.props.loading 
            ? 
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner> 
            :
            <React.Fragment>
              <Button className="btn-round" color="success" variant="primary" onClick={this.handleSubmit}>
                Submit
              </Button>
              <Button className="btn-round" color="danger" variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </React.Fragment>
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
    error: state.authReducer.error
  };
};

const mapDispachToProps = dispatch => {
  return {
    onSubmitForgotPassword: (email, handleClose) => { dispatch(actions.forgotPassword(email, handleClose))}
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(ForgotPassword);