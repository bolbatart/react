import React from 'react'
import styled from 'styled-components';
import MyProfileHeader from 'components/MyProfilePage/MyProfileHeader';
import MyProfileContent from 'components/MyProfilePage/MyProfileContent';


const MyProfilePage = () => {
  return (
    <StyledMyProfilePage>
      <MyProfileHeader />
      <MyProfileContent />
    </StyledMyProfilePage>
  )
}

export default MyProfilePage

const StyledMyProfilePage = styled.div`

`;