import React from 'react';

interface ITextInput {
  type: string;
}

const TextInput = ({ type }: ITextInput) => {
  return <input type={type} />;
};

export default TextInput;
