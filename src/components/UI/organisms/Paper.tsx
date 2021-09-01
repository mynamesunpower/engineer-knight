import React, { BaseSyntheticEvent, useRef, useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { solvedQuiz } from '../../../lib/quiz/QuizApi';

const category1Map = new Map([
  ['00', '기타'],
  ['01', '현행 시스템 분석 및 요구사항 확인'],
  ['02', '데이터 입출력 구현'],
  ['03', '통합 구현'],
  ['04', '서버프로그램 구현'],
  ['05', '인터페이스 구현'],
  ['06', '화면 설계'],
  ['07', '애플리케이션 테스트 관리'],
  ['08', 'SQL 응용'],
  ['09', '소프트웨어 개발 보안 구축'],
  ['10', '프로그래밍 언어 활용'],
  ['11', '응용 SW 기초 기술 활용'],
  ['12', '제품소프트웨어 패키징'],
]);

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

type Props = {
  quiz: QuizType;
  quizLength: number;
  fetchQuiz: any;
};

const Paper = ({ quiz, quizLength, fetchQuiz }: Props) => {
  const classes = useStyles();

  // 정답률
  const correctRate = isNaN(quiz.solvedNumber / quiz.answeredNumber)
    ? 0
    : (quiz.solvedNumber / quiz.answeredNumber) * 100;

  const [answer, setAnswer] = useState<string>('');

  const onChange = (e: BaseSyntheticEvent) => {
    setAnswer(e.target.value);
  };

  /*
      onKeyUp 이벤트
   */
  const onKeyUp = (e: any) => {
    /*
        조합 키 TODO 조합키는 전역에 걸던가 해야될 것 같음. 또는 퀴즈쪽에만이라도.
     */
    // ALT + → (우측 화살표) 키
    if (e.altKey && e.keyCode === 39) {
      fetchQuiz();
      return;
    }

    /*
        단일 키
     */
    switch (e.key) {
      case 'Enter':
        checkAnswer();
        return;
    }
  };

  /*
      정답 확인!
   */
  const checkAnswer = () => {
    const answers = quiz.answer.split(',');
    const inputAnswer = answer.replace(' ', '').trim().toLowerCase();
    console.log(inputAnswer);
    if (answers.includes(inputAnswer)) {
      // 정답 이벤트 기본 세팅
      alert('Answered!');
      setAnswer('');
      // 정답 분기
      // TODO 푼 문제 + 1, 맞은 문제 + 1 update
      solvedQuiz(quiz.id, true).then((r) => console.log);
      fetchQuiz();
    } else {
      alert('failed!');
      setAnswer('');
      // 실패 분기
      // TODO 푼 문제 + 1
      solvedQuiz(quiz.id, false).then((r) => console.log);
    }
  };

  if (quiz.id === 0) {
    return (
      <Card className={classes.root} variant='outlined'>
        <Button onClick={fetchQuiz}>{`Let's go! ------->`}</Button>
      </Card>
    );
  }
  if (quizLength === 0) {
    return (
      <Card className={classes.root} variant='outlined'>
        문제가 더 없어요 ㅃㅃ2
      </Card>
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
          {`${category1Map.get(quiz.category1)} ${quiz.category2 ?? ''}`}
        </Typography>
        {quiz.answeredNumber > 0 ? (
          <Typography className={classes.pos} color='textSecondary'>
            {`정답률: ${Math.round(correctRate)}% `}
          </Typography>
        ) : (
          <Typography className={classes.pos} color='textSecondary' />
        )}
        <Typography variant='body2' component='p'>
          {quiz.quiz}
        </Typography>
      </CardContent>
      <CardActions>
        <TextField
          autoFocus={true}
          margin='normal'
          value={answer}
          onChange={onChange}
          required
          onKeyUp={onKeyUp}
        />
        <Button
          variant='outlined'
          size='small'
          name='check'
          onClick={checkAnswer}
        >
          정답 체크
        </Button>
        <Button
          variant='outlined'
          color='secondary'
          size='small'
          name='next'
          onClick={fetchQuiz}
        >
          다음 문제 풀기
        </Button>
      </CardActions>
    </Card>
  );
};

export default Paper;
