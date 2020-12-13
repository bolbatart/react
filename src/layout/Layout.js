import React from 'react'

import styled from 'styled-components';
import NavBar from 'components/HeaderMenu/NavBar';
import HeaderMenu from 'components/HeaderMenu/HeaderMenu';
import Footer from 'components/Footer/Footer';
import NewFooter from 'components/Footer/NewFooter';

const Layout = (props) => {
  
  return (
    <div>
      <StyledMain>  
        <div className="mui-fixed header-menu-container">
          <HeaderMenu />
        </div>
        <main className="main">
          {props.children}
        </main>
        <div className="footer-container">
          {/* <Footer /> */}
          <NewFooter />
        </div>
      </StyledMain>
    </div>
  )
}

export default Layout;

const StyledMain = styled.div`
  /* position: relative; */
  min-height: 100vh;

  .header-menu-container {
    position: fixed;
    z-index:10;
    height: 100px;
    /* margin-top: -100px; */
    top: 0;
    /* width: 100%; */
    right: 0;
    left: 0;
    transform: none;
  }

  .main {
    width: 100%;
    min-height: 100vh;
    width: 100%;

  }

  .footer-container {
    /* position: absolute; */
    width: 100%;
    /* bottom: 0; */
 }
`;
