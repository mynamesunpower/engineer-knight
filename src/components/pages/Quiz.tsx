import React from 'react';
import Paper from '../UI/organisms/Paper';
import styled from 'styled-components';
import palette from '../../assets/styles/palette';

const StyledQuiz = styled.div`
  .quiz {
    border-radius: 1px;
    border-color: rgba(133, 221, 22, 0.4);
    border-style: solid;
    box-shadow: #282c34;
    padding: 2rem;
    margin: 2rem auto;
    display: flex;
    width: 600px;
    background-color: ${palette.gray[6]};
    color: ${palette.gray[1]};
  }
`;

const Quiz = () => {
  return (
    <StyledQuiz>
      <div className='quiz'>
        <Paper />
      </div>
    </StyledQuiz>
  );
};

export default Quiz;
