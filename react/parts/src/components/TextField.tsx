import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  border-radius: 5px;
  border: solid 1px #333;
`;

const InputArea = styled.div`
  margin-bottom: 7px;
  border-radius: 5px;
  border: solid 1px #333;
`;

const Input = styled.input`
  height: 25px;
  font-size: 20px;
  border-radius: 5px;
  border: solid 1px #333;
`;

const Output = styled.p`
  height: 30px;
  margin: 0;
  padding: 10px 0;
  font-size: 23px;
`;

export const TextField: React.FC = React.memo(() => {
  const [value, setValue] = useState('');
  const [display, setDisplay] = useState('');

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const pressEnter = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== 'Enter') return;
    setDisplay(value);
  };

  const determineText = (): void => {
    if (value === display) return;
    setDisplay(value);
  };

  return (
    <Wrapper>
      <InputArea>
        <Input type='text' value={value} onChange={onChangeValue} onKeyPress={pressEnter} onBlur={determineText} />
      </InputArea>
      <Output>{value}</Output>
      <Output>{display}</Output>
    </Wrapper>
  );
});
