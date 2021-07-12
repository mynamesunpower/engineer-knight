import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
interface ITopNav {}

const TopNav = () => {
  return (
    <div>
      <Link to='/'>
        <Button>Main</Button>
      </Link>
      {/*<h1>정보처리기사/카테고리1/세부1/세부2</h1>*/}
      <Link to='login'>
        <Button>login</Button>
      </Link>
    </div>
  );
};

export default TopNav;
