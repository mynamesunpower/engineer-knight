import React from 'react';
import TextDiv from '../atoms/TextDiv';
import styled from 'styled-components';
import Quiz from '../../pages/Quiz';

interface IPaper {}

const QuizPaper = styled.div`
  display: flex;
`;

const Paper = ({}: IPaper) => {
  return (
    <QuizPaper>
      <TextDiv>문제유형</TextDiv>
      <TextDiv>정답률</TextDiv>
      <div>
        <span>문제순번</span>
        <div>문제</div>
      </div>
      <TextDiv>답안입력제출폼</TextDiv>
    </QuizPaper>
  );
};

export default Paper;
