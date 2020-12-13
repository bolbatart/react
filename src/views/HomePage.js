import React from 'react'
import styled from 'styled-components';
import HomePageHeaderImg from 'assets/img/home-page.jpg';

const HomePage = () => {
  return (
    <StyledHomePage>
      {/* HEADER */}
      <section className="hp-header">
        <div className="hp-header-content">
          <h1>{"{NAME}"}</h1>
          <button className="btn btn-primary" type="submit">What it is?</button>
        </div>
      </section>
      {/* / HEADER */}
      
      {/* INSTRUCTION */}
      <section className="hp-instruction">
        <h1 className='hp-instruction__title'>Make your project come alive with the help of others</h1>
        <div className="hp-instruction__items-container">
          <h3>instruction</h3>
        </div>
      </section>

    </StyledHomePage>
  )
}

export default HomePage

const StyledHomePage = styled.div`

  /* HEADER */
  .hp-header {
    height: 100vh;
    background: url(${HomePageHeaderImg});
    background-size: cover;
    background-position: center;
    position: relative;

    &-content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      color: white;

      h1 {
        margin: 0 0 16px;
      }
    }
    
    /* ADD TO GLOBAL MIXIN */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: rgba(20, 39, 41, .6);
    }
  }
  /* / HEADER */
  
  /* INSTRUCTIONS */
  .hp-instruction {
    padding:  128px;
    
    &__title {
      max-width: 500px;
    }

    &__items-container {
      height: 400px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  /* / INSTRUCTIONS */
`;