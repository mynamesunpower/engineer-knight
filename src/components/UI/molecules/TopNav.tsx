import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import styled from 'styled-components';
import palette from '../../../assets/styles/palette';

interface ITopNav {}

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: ${palette.gray[8]};
`;

const TopNav = () => {
  return (
    <Nav>
      <Link to='/'>
        <Button>Main</Button>
      </Link>
      {/*<h1>정보처리기사/카테고리1/세부1/세부2</h1>*/}
      <Link to='/login'>
        <Button>Login</Button>
      </Link>
      <Link to='/register'>
        <Button>Register</Button>
      </Link>
      <Link to='/quiz'>
        <Button>Quiz</Button>
      </Link>
    </Nav>
  );
};

export default TopNav;
