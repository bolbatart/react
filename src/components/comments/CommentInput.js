import React from 'react'
import styled from 'styled-components';
import Avatar from 'images/avatar.jpg';


const CommentInput = () => {
  return (
    <StyledCommentInput>
      <img className='rounded-circle' src={Avatar} alt=""/>
      <textarea className='form-control' rows={3} name="" id="" placeholder='Write a comment..' />
      <button className="btn btn-outline-primary">Post</button>
    </StyledCommentInput>
  )
}

export default CommentInput;

const StyledCommentInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 80px;
    margin: 0 24px 0 0;
  }
  textarea {
    margin: 0 24px 0 0;
    padding: 16px;
    outline: none;
    transition: none;
    background-color: #E5E5E5;
    
  }

  button {
    font-size: 16px;
  }

`;


