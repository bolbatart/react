import React, { useState } from 'react'
import styled from 'styled-components';
import ProjectsListCard from 'components/Projects/ProjectsListCard';
import ProjectsList from 'components/Projects/ProjectsList';
import Pagination from '@material-ui/lab/Pagination';



const MyProfileContent = () => {
  const [isPostedOpen, setIsPostedOpen] = useState(true);

  


  return (
    <StyledMyProfileContent>
      <div className="my-profile-nav">
        <span 
          className={isPostedOpen ? 'active nav' : 'nav'} 
          onClick={() => setIsPostedOpen(true)}
        >
            Posted projects
        </span>
        <span 
          className={!isPostedOpen ? 'active nav' : 'nav'} 
          onClick={() => setIsPostedOpen(false)}
        >
            Liked projects
        </span>
      </div>
      
      <div className="my-profile-cards-container">
        {isPostedOpen ? (
          <>
            <ProjectsList projects={null}/>
          </>
        ) : (
          <>
            <ProjectsList projects={null}/>
          </>
        )}
      </div>

      <div className="projects-pagination">
        <Pagination count={10} />
      </div>
    </StyledMyProfileContent>
  )
}

export default MyProfileContent;

const StyledMyProfileContent = styled.div`
  padding: 64px 128px;
  
  .my-profile {
    &-nav {
      display: flex;
      margin: 0 0 48px;
      align-items: center;
      justify-content: center;
      span {
        font-size: 22px;
        
        &:first-child {
          margin: 0 24px 0 0;
        }
        
        &.active {
          font-weight: 500;
          font-size: 32px;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }

  }

  .projects-pagination {
    display: flex;
    justify-content: center;
  }
`;