import React, {
  BaseSyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import hello from '../../lib/hello';
import { Link } from 'react-router-dom';
import { Button, makeStyles, TextField } from '@material-ui/core';
import insertQuiz from '../../lib/quiz/insertQuiz';

const StyledMain = styled.main`
  padding: 0.5rem;
  text-align: center;
  color: #282c34;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const Main: React.FC = () => {
  const classes = useStyles();

  const [helloMsg, setHelloMsg] = useState<string>('');
  const [isInsertFormVisible, setInsertFormVisible] = useState<boolean>(false);
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

  const onChange = (e: BaseSyntheticEvent) => {
    setQuiz({
      ...quiz,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    hello().then((response) => {
      setHelloMsg(response.data);
    });
  }, []);

  /**
   * 문제 등록
   */
  const onInsert = useCallback((quiz: QuizType) => {
    insertQuiz(quiz).then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <StyledMain>
      <div>{helloMsg}</div>
      <div>
        <Button onClick={() => setInsertFormVisible(!isInsertFormVisible)}>
          문제 입력 FORM 보기
        </Button>
        <Button>
          <Link to={'/quiz'}>랜덤 문제 풀기</Link>
        </Button>
      </div>
      {isInsertFormVisible && (
        <form className={classes.root}>
          문제 입력하기
          <div className='inputElement'>
            <TextField
              label='문제구분(단답(1)/약술(2))'
              style={{ margin: 8 }}
              placeholder='숫자 입력 N·N'
              margin='normal'
              InputLabelProps={{ shrink: true }}
              name='quizType'
              value={quiz.quizType}
              onChange={onChange}
            />
          </div>
          <div className='inputElement'>
            <TextField
              label='카테고리1(대분류)'
              style={{ margin: 8 }}
              placeholder='N·N'
              margin='normal'
              InputLabelProps={{ shrink: true }}
              name='category1'
              value={quiz.category1}
              onChange={onChange}
            />
          </div>
          <div className='inputElement'>
            <TextField
              label='카테고리2(소분류)'
              style={{ margin: 8 }}
              placeholder=''
              margin='normal'
              InputLabelProps={{ shrink: true }}
              name='category2'
              value={quiz.category2}
              onChange={onChange}
            />
          </div>
          <div className='inputElement'>
            <TextField
              label='문제'
              style={{ margin: 8 }}
              placeholder='N·N'
              margin='normal'
              InputLabelProps={{ shrink: true }}
              multiline
              name='quiz'
              value={quiz.quiz}
              onChange={onChange}
            />
          </div>
          <div className='inputElement'>
            <TextField
              label='정답'
              style={{ margin: 8 }}
              placeholder='(구분자 쉼표로 입력) N·N'
              margin='normal'
              InputLabelProps={{ shrink: true }}
              name='answer'
              value={quiz.answer}
              onChange={onChange}
            />
          </div>
          <div className='inputElement'>
            <TextField
              label='기출여부'
              style={{ margin: 8 }}
              placeholder='Y / N (N·N)'
              margin='normal'
              InputLabelProps={{ shrink: true }}
              name='previousYn'
              value={quiz.previousYn}
              onChange={onChange}
            />
          </div>
          <div className='inputElement'>
            <TextField
              label='기출연도'
              style={{ margin: 8 }}
              placeholder='XXXX'
              margin='normal'
              InputLabelProps={{ shrink: true }}
              multiline
              name='previousYear'
              value={quiz.previousYear}
              onChange={onChange}
            />
          </div>
          <div className='inputElement'>
            <TextField
              label='기출회차'
              style={{ margin: 8 }}
              placeholder=''
              margin='normal'
              InputLabelProps={{ shrink: true }}
              multiline
              name='previousNumber'
              value={quiz.previousNumber}
              onChange={onChange}
            />
          </div>
          <Button onClick={() => onInsert(quiz)}>등록하기</Button>
        </form>
      )}
    </StyledMain>
  );
};

export default Main;
