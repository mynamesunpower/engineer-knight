import React from 'react';
import TextDiv from '../atoms/TextDiv';

interface IPaper {}

const Paper = ({}: IPaper) => {
  return (
    <div>
      <TextDiv>문제유형</TextDiv>
      <TextDiv>정답률</TextDiv>
      <div>
        <span>문제순번</span>
        <div>문제</div>
      </div>
      <TextDiv>답안입력제출폼</TextDiv>
    </div>
  );
};

export default Paper;
