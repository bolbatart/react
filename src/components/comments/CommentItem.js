import React from 'react'
import styled from 'styled-components';
import Avatar from 'images/avatar.jpg';
import HeartIcon from 'images/heart.svg';

const CommentItem = ({data}) => {
  return (
    <StyledCommentItem>
      <div className="author">
        <img className='rounded-circle' src={Avatar} alt=""/>
        <div className="auth-info">
          <p className='auth-name'>{data.name}</p>
          <p className='msg-time'>{data.time}</p>
        </div>
      </div>
      <div className="comment">
        <p>{data.comment}</p>
        <div className="like">
          <img src={HeartIcon} alt=""/>
          <span>{data.likes}</span>
        </div>
      </div>
    </StyledCommentItem>
  )
}

export default CommentItem;

const StyledCommentItem = styled.div`
  background-color:  white;
  padding:24px;
  border-radius: 10px;
  margin: 0 0 16px;
  .author {
    display: flex;
    width: 200px;
    img {
      width: 50px;
    }
    .auth-info {
      margin: 0 0 0 16px;
      p.auth-name {
        font-size: 16px;
        font-weight: bold;
      }
      p.msg-time {
        font-size: 12px;
        color: grey;
      }
    }
  }

  .comment {
    margin: 16px 0 0;
    display: flex;
    justify-content: space-between;
    p {
      max-width: 1200px;
    }
    .like {
      img {
        width: 16px;
        margin: 0 16px 0 0;
      }
      span {
        font-size: 16px;
      }
      
    }
    
  }

`;
