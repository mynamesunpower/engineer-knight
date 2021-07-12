import React from 'react';
import styled from 'styled-components';
import palette from '../../../assets/styles/palette';

const StyledButton = styled.button<{ children: string }>`
  border: none;
  border-radius: 1px;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
`;

interface IButton {
  children: string;
}

const Button = (props: IButton) => {
  return <StyledButton {...props} />;
};

export default Button;
