import React, { Component } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as logoutActions from '../../store/actions/auth/logout'

// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  NavbarText
} from "reactstrap";


import Login from './Login'
import Register from './Register'


function NavBar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const dispatch = useDispatch();
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/"
            target="_blank"
          >
            Team-Finder
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>        
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Projects</NavLink>
            </NavItem>
            {
              useSelector(state => state.authReducer.loggedIn) 
              ?
              <NavItem>
                <Button
                  onClick={() => dispatch(logoutActions.logout())}
                  className="btn-round"
                  color="danger"
                  >
                  Sign Out
                </Button>
              </NavItem>
              :
              <React.Fragment>
                <NavItem>
                  <Login />
                </NavItem>
                <NavItem>
                  <Register />
                </NavItem>
              </React.Fragment>
            }
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
