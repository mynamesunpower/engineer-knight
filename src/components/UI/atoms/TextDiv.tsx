import React from 'react';
import styled from 'styled-components';

const div = styled.div``;

interface ITextDiv {
  children: string;
}

const TextDiv = ({ children }: ITextDiv) => {
  return <div>{children}</div>;
};

export default TextDiv;
