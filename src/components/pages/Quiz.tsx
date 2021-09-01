import React, { useCallback, useEffect, useState } from 'react';
import Paper from '../UI/organisms/Paper';
import styled from 'styled-components';
import palette from '../../assets/styles/palette';
import axios, { AxiosError } from 'axios';
import getQuiz from '../../lib/quiz/getQuiz';

const StyledQuiz = styled.div`
  .quiz {
    border-radius: 1px;
    border-color: rgba(133, 221, 212, 0.4);
    border-style: solid;
    box-shadow: #282c34;
    padding: 1rem;
    margin: 2rem auto;
    display: flex;
    width: 80%;
    background-color: ${palette.gray[6]};
    color: ${palette.gray[0]};
  }
`;

const Quiz: React.FC = () => {
  /*

   */
  const [quiz, setQuiz] = useState<QuizType>({
    id: 0,
    quizType: '',
    category1: '',
    category2: '',
    quiz: '',
    answer: '',
    previousYn: '',
    previousYear: '',
    previousNumber: '',
    solvedNumber: 0,
    answeredNumber: 0,
    description: '',
  });
  const [quizLength, setQuizLength] = useState<number>(0);
  const [quizNumbers, setQuizNumbers] = useState<number[]>([]);

  useEffect(() => {
    axios
      .get('/api/v1/quiz/length')
      .then((response) => {
        setQuizLength(response.data);
        setQuizNumbers([...Array(response.data)].map((v, i) => i + 1));
      })
      .catch((e: AxiosError) => console.warn);
  }, []);

  const fetchQuiz = useCallback(() => {
    const no = quizNumbers.splice(
      Math.floor(Math.random() * quizNumbers.length),
      1,
    )[0];

    if (no) {
      console.log(`fetchQuiz No. ${no}`);
      getQuiz(no).then((response) => {
        const quiz = response.data;
        setQuiz(quiz);
      });
      setQuizNumbers(quizNumbers);
    } else {
      console.warn('splice finished or empty array');
    }
  }, [quizNumbers]);

  return (
    <StyledQuiz>
      <div className='quiz'>
        <Paper quiz={quiz} fetchQuiz={fetchQuiz} />
        <button onClick={fetchQuiz}>quiz</button>
      </div>
    </StyledQuiz>
  );
};

export default Quiz;
