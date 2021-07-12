import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: block;
`;

interface ITextDiv {
  children: string;
}

const TextDiv = ({ children }: ITextDiv) => {
  return <Div>{children}</Div>;
};

export default TextDiv;
