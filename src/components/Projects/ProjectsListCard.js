import React from 'react'
import styled from 'styled-components';
import CardTestImg from 'assets/img/home-page.jpg'
import LocationIcon from 'assets/img/icons/placeholder.svg';

const ProjectsListCard = (props) => {
  return (
    <StyledProjectsListCard>
      <div className="card-img">
        <div className="card-img__area">
          <span>Project area</span>
        </div>
      </div>


      <div className="card-content">

        <h5 className="card-content__title">Name of the project</h5>

        <div className="card-content__desc">
          <p>Lorem ipsum dolor sit amet  maiores dolores, illum quasi error sequi soluta sit ab doloremque et quo perferendis?</p>
        </div>

        <div className="card-content__profs">
          <h6>Professionals needed:</h6>
          <ul>
            <li>Designer</li>
            <li>Back-end developer</li>
          </ul>
        </div>

        <div className="card-content-footer">
          <span>Location</span>
          <button type="button" className="btn btn-primary">Find out more</button>
        </div>

      </div>
    </StyledProjectsListCard>
  )
}

export default ProjectsListCard;

const StyledProjectsListCard = styled.div`
  display: flex;
  min-width: 300px;
  max-width: 600px;
  flex-direction: column;
  border-radius: 10px;
  background-color: #ebebeb;

  .card-img {
    width: 100%;
    height: 200px;
    background: url(${CardTestImg});
    background-position: center;
    background-size: cover;
    border-radius: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative;
    &__area {
      padding: 0 24px;
      min-width: 180px;
      height: 40px;
      color: white;
      /* background-color: rgba(0, 39, 79, 0.8); */
      background-color: #0e3a63;
      display: flex;
      justify-content:center;
      align-items: center;
      position: absolute;
      bottom: -20px;
      left: 32px;
    }
  }
  
  .card-content {
    padding: 48px 32px 32px;
    display: flex;
    flex-direction: column;

    &__title {
      margin: 0 0 24px;
    }
    
    &__desc {
      max-width: fit-content;
      font-size: 14px;
      height: 100px;
      p::after {
        content: '...'
      }
    }

    &__profs {
      margin: 24px 0;
      li {
        font-size: 14px;
      }
    }



    &-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span::before {
        content: "";
        display: block;
        background: url(${LocationIcon}) no-repeat;
        width: 24px;
        height: 24px;
        float: left;
        margin: 0 6px 0 0;
     }
    }
  }

  @media (max-width: 1024px) {
    .card-img {
      height: 300px;
    }
  }

`;
