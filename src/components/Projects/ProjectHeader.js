import React from 'react'
import styled from 'styled-components';
import HomePageHeaderImg from 'assets/img/home-page.jpg';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core';


const CssTextField = withStyles({
  root: {
    '& .MuiSvgIcon-root': {
      color: 'white',
    },
    '& .MuiFormLabel-root' : {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const ProjectHeader = () => {
  const classes = useStyles();

  
  return (
    <StyledProjectHeader>
      <div className="projects-filter">
        <h1>Find a project</h1>
        {/* FORM */}
        <div className="projects-filter-form">
          <h4 className='projects-filter-form__title'>Selecte criterias</h4>
          <form >
            {/* ROW */}
            <div className="projects-filter-form-row">
              <div className="projects-filter-form__item">
                <CssTextField label="Search" variant="outlined" />
              </div>
              <div className="projects-filter-form__item">
                <CssTextField select label="Outlined" variant="outlined" />
              </div>
            </div>
            {/* / ROW */}
            {/* ROW */}
            <div className="projects-filter-form-row">
              <div className="projects-filter-form__item">
                <CssTextField select label="Outlined" variant="outlined" />
              </div>
              <div className="projects-filter-form__item">
                <CssTextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  variant="outlined"
                >
                    <option value="asd">asd</option>
                </CssTextField>
              </div>
            </div>
            {/* / ROW */}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        {/* / FORM */}
      </div>
    </StyledProjectHeader>
  )
}

export default ProjectHeader

const StyledProjectHeader = styled.div`
  padding: 100px 128px 100px;
  display: flex;
  align-items: center;
  height: 100vh;
  position: relative;
  /* BG_IMG */
  background: url(${HomePageHeaderImg});
  background-size: cover;
  background-position: center;
  
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
  /* ADD TO GLOBAL MIXIN */


  .projects-filter {
    color: white;
    position: relative;
    width: 100%;
    >h1 {
      margin: 0 0 64px;
    }
    
    &-form {
      padding: 32px;
      background-color: rgba(0, 39, 79, 0.8);
      max-width: 800px;
      
      form {
        margin: 24px 0 0;
      }
      
      &-row {
        display: flex;
        justify-content: space-between;
        margin: 0 0 24px;
      }

      &__item {
        display: flex;
        flex: 1;
        &:first-child {
          margin: 0 16px 0 0;
        }
        
        >div {
          color: white;
          flex:1;
        }
      }
    }    
  }

  @media (max-width: 800px) {
    padding: 100px 32px 100px; 
    .projects-filter {
      > h1 {
        margin: 110px 32px 64px;
      }
      &-form{
        &-row {
          display: block;
        }
        &__item:first-child {
          width: 100%;
          margin: 0 0 24px;
        }
      }

    }
  }
`;