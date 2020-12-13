import React, { useState } from 'react'
import styled from 'styled-components';
import HomePageHeaderImg from 'assets/img/home-page.jpg';
import Avatar from 'images/avatar.jpg';
import { InputBase, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heading: {
    margin: theme.spacing(1),
    color: 'white',
    width: '100%',
    fontSize: '32px'
  },
  posloc: {
    margin: theme.spacing(1),
    color: 'white',
    width: '100%',
    fontSize: '22px'
  },
  bio: {
    margin: theme.spacing(1),
    color: 'white',
    width: '100%',
    fontSize: '14px'
  },
}));

const MyProfileHeader = () => {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false);

  const onEditClick = () => {
    setEditMode(!editMode);
  }

  return (
    <StyledMyProfileHeader>
        <div className="profile-img">
          <img className='rounded-circle' src={Avatar} alt=""/>
        </div>      
        
        <div className="profile-info">
        
          <div className="profile-info__name">
          {editMode ? (
            <InputBase
              className={classes.heading}
              defaultValue="John Doe"
              inputProps={{ 'aria-label': 'naked' }}
            />
          ) : (
            <h2>John Doe</h2>
          )}
          </div>

          <div className="profile-info__pos-loc">
            {editMode ? (
              <>
                <InputBase
                  className={classes.posloc}
                  defaultValue="Senior Developer"
                  inputProps={{ 'aria-label': 'naked' }}
                />
                <InputBase
                  className={classes.posloc}
                  defaultValue="Minsk, Belarus"
                  inputProps={{ 'aria-label': 'naked' }}
                />
              </>
            ) : (
              <>
                <span>Senior Developer</span>
                <span>Minsk, Belarus</span>
              </>
            )}
          </div>
          
          <div className="profile-info__bio">
            {editMode ? (
              <InputBase
                multiline
                className={classes.bio}
                defaultValue="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique aspernatur dolore facere laboriosam nesciunt dolorem sequi ipsa vero assumenda optio ullam iste quo magnam ipsam, eveniet exercitationem repellendus maiores omnis?"
                inputProps={{ 'aria-label': 'naked' }}
              />
            ) : (
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique aspernatur dolore facere laboriosam nesciunt dolorem sequi ipsa vero assumenda optio ullam iste quo magnam ipsam, eveniet exercitationem repellendus maiores omnis?</p>
            )}
          </div>
          
          <div className="profile-info__btn">
            {editMode ? (
              <button type="button" className="btn btn-primary" onClick={onEditClick}>Turn off edit mode</button>
              ) : (
                <button type="button" className="btn btn-primary" onClick={onEditClick}>Edit profile</button>
            )}
          </div>
          
        </div>
    </StyledMyProfileHeader>
  )
}

export default MyProfileHeader

const StyledMyProfileHeader = styled.div`
  padding: 100px 0;
  height: 540px;
  width: 100%;
  padding: 0 128px;
  background: url(${HomePageHeaderImg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
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
  /* /ADD TO GLOBAL MIXIN */

  >div {
    position: relative;
  }

  .profile-img {
    margin: 0 64px 0 0;
    img {
      height: 250px;
    }
  }

  .profile-info {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    &__pos-loc {
      display: flex;
      span {
        font-size: 22px;
        font-weight: bold;
        margin: 0 16px 0 0;
      }
    }

    &__bio {
      font-size: 14px;
      max-width: 624px;
    }
  }

  @media (max-width: 800px) {
    height: 100vh;
    flex-direction: column;

    .profile-info {
      justify-content: center;
      align-items: center;
    }
  }

`;