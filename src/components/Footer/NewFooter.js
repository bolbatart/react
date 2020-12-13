import React from 'react'
import styled from 'styled-components'
import FacebookLogo from 'assets/img/icons/facebook.svg';
import TwitterLogo from 'assets/img/icons/twitter.svg';

const NewFooter = () => {
  return (
    <StyledNewFooter>
      <div className="footer-header">
        <h1>LOGO</h1>
      </div>
      <div className="header-divider">
       <hr/>

      </div>
      <div className="footer-main">
        <div className="footer-logos">
          <img src={FacebookLogo} alt=""/>
          <img src={TwitterLogo} alt=""/>
        </div>
        <div className="footer-companyinc">
          © Company, Inc. 2019. We love our users!
        </div>
      </div>
            
    </StyledNewFooter>
  )
}

export default NewFooter

const StyledNewFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 80px;
  background-color: rgba(0, 39, 79, 0.8);;
  color: white;

  .footer-header {
    display: flex;
    justify-content: center;
  }

  hr {
    border-color: white;
  }

  .footer-main {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    .footer-logos {
      margin: 0 0 16px;
      img {
        height: 40px;
        &:first-child {
          margin: 0 16px 0 0;
        }
      }
    }

    .footer-companyinc {
      
    }
  }

`;