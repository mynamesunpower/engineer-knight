import React from 'react';
import TextDiv from '../atoms/TextDiv';
import styled from 'styled-components';
import Quiz from '../../pages/Quiz';
import palette from '../../../assets/styles/palette';

interface IPaper {}

const QuizPaper = styled.div`
  font-size: 21px;

  .quiz-type {
    margin-bottom: 3rem;
    font-size: 30px;
    float: left;
  }
  .correct-rate:before {
    content: '정답률 - ';
  }
  .correct-rate {
    color: aliceblue;
    font-size: 14px;
    float: right;
  }
  .correct-rate:after {
    content: '%';
  }
  .quiz-box {
    display: flex;
    clear: both;
    text-align: center;
    margin-bottom: 3rem;
  }
  .quiz-sequence {
    font-family: AppleSDGothicNeoH00, serif;
    margin-right: 0.8rem;
  }
  .quiz-sequence:after {
    content: '.';
  }
  .quiz-input {
    text-align: center;
  }
  .answerInput {
    background-color: ${palette.gray[6]};
    margin: 0 auto;
    border: none;
    border-bottom: 2px solid darkslategray;
    width: 50%;
  }
  .answerInput:focus {
    outline: none;
    background-color: ${palette.gray[6]};
    margin: 0 auto;
    border: none;
    border-bottom: 2px solid darkslategray;
    width: 50%;
  }
  .answerInput::placeholder {
    color: ${palette.cyan[1]};
    font-size: 14px;
  }
`;

const Paper = ({}: IPaper) => {
  return (
    <QuizPaper>
      <div className='quiz-type'>단답형</div>
      <div className='correct-rate'>74.4</div>
      <div className='quiz-box'>
        <span className='quiz-sequence'>227</span>
        <span className='quiz-content'>
          HTTP URI를 통해 자원을 명시하고, HTTP 메소드(POST, GET, PUT, DELETE)를
          통해 해당 자원에 대한 생성, 조회, 갱신, 삭제 등의 명령을 적용하는
          기술은?
        </span>
      </div>
      <div className='quiz-input'>
        <form>
          <input placeholder='정답 입력' type='text' className='answerInput' />
        </form>
      </div>
    </QuizPaper>
  );
};

export default Paper;
