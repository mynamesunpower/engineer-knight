import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ children: string }>`
  background: white;
  border-radius: 4px;
`;

interface IButton {
  children: string;
}

const Button = ({ children }: IButton) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
