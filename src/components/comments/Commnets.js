import React from 'react'
import styled from 'styled-components';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';

const comments = [
  {
    name: 'Jason', 
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iste earum consequatur omnis provident, similique aut voluptatibus sed? Sequi eum illo ut voluptas quam iste veniam quaerat est reiciendis officiis.', 
    time: '1 minute ago',
    likes: 34
  },
  {
    name: 'Jason', 
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iste earum consequatur omnis provident, similique aut voluptatibus sed? Sequi eum illo ut voluptas quam iste veniam quaerat est reiciendis officiis.', 
    time: '1 minute ago',
    likes: 34
  },
  {
    name: 'Jason', 
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iste earum consequatur omnis provident, similique aut voluptatibus sed? Sequi eum illo ut voluptas quam iste veniam quaerat est reiciendis officiis.', 
    time: '1 minute ago',
    likes: 34
  },
]

const Commnets = () => {
  return (
    <StyledComments>
      <h4>Comments (3)</h4>
      <div className="comments-container">
        {comments.map(com => <CommentItem data={com}/>)}
      </div>
      <CommentInput />
    </StyledComments>
  )
}

export default Commnets;

const StyledComments = styled.div`
  max-width: 1500px;
  margin: auto;
  margin-top: 200px;
  h4 {
    margin: 0 0 64px;
  }
  .comments-container {
    background-color: #f5f5f5;
    padding: 24px;
    margin: 0 0 64px;
  }

`;
