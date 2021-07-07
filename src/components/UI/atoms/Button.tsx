import React from 'react';

interface IButton {
  children: string;
}

const Button = ({ children }: IButton) => {
  return <button>{children}</button>;
};

export default Button;
