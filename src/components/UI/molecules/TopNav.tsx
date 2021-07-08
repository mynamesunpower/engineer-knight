import React from 'react';
import Button from '../atoms/Button';

interface ITopNav {}

const TopNav = () => {
  return (
    <div>
      <Button>sidenav</Button>
      <h1>정보처리기사/카테고리1/세부1/세부2</h1>
      <Button>login</Button>
    </div>
  );
};

export default TopNav;
