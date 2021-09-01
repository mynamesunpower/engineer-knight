import React, { BaseSyntheticEvent, useState } from 'react';
import TextDiv from '../atoms/TextDiv';
import styled from 'styled-components';
import Quiz from '../../pages/Quiz';
import palette from '../../../assets/styles/palette';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  TextField,
  Tooltip,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

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

type Props = {
  quiz: QuizType;
  fetchQuiz: any;
};

const Paper = ({ quiz, fetchQuiz }: Props) => {
  const classes = useStyles();

  const correctRate = isNaN(quiz.answeredNumber / quiz.solvedNumber)
    ? 0
    : quiz.answeredNumber / quiz.solvedNumber;

  const [answer, setAnswer] = useState<string>('');

  const onChange = (e: BaseSyntheticEvent) => {
    setAnswer(e.target.value);
  };

  const checkAnswer = () => {
    const answers = quiz.answer.split(',');
    const inputAnswer = answer.replace(' ', '').trim().toLowerCase();
    console.log(inputAnswer);
    if (answers.includes(inputAnswer)) {
      alert('Answered!');
      setAnswer('');
      // 정답 분기
      fetchQuiz();
    } else {
      alert('failed!');
      setAnswer('');
      // 실패 분기
    }
  };

  if (quiz.id === 0) {
    return (
      <QuizPaper>
        <Button onClick={fetchQuiz}>{`Let's go! ------->`}</Button>
      </QuizPaper>
    );
  }

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          {`단답형 ${quiz.id}.`}
        </Typography>
        <Typography variant='h5' component='h2'>
          {`category: ${quiz.category1} ${quiz.category2 ?? ''}`}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {`correct rate: ${correctRate}% `}
        </Typography>
        <Typography variant='body2' component='p'>
          {quiz.quiz}
        </Typography>
      </CardContent>
      <CardActions>
        <TextField
          margin='normal'
          value={answer}
          onChange={onChange}
          required
        />
        <Button size='small' onClick={checkAnswer}>
          정답 체크
        </Button>
      </CardActions>
    </Card>
  );
};

export default Paper;
