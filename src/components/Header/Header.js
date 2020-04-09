import React from 'react';
import { connect } from "react-redux";

import * as actions from '../../store/actions/auth/logout'

import { Container } from "reactstrap";


class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div
        className="page-header section-dark"
        style={{
          backgroundImage: "url(" + require("../../assets/img/home-page.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Team Finder</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              PSA project
            </h2>
          </Container>
        </div>
      </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authReducer.loggedIn
  };
};

const mapDispachToProps = dispatch => {
  return {
    onLogout: () => { dispatch(actions.logout()) }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Header);
