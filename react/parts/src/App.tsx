import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { TextField } from './components/TextField';
import { ScaleBar } from './components/ScaleBar';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ddd;
`;

const ShownValue = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  font-size: 30px;
  font-weight: bold;
  color: #333;
`;

export const App: React.FC = React.memo(() => {
  const [scaleValue, setScaleValue] = useState(0);
  const [sendedScaleValue, setSendedScaleValue] = useState<number | null>(null);

  const onChangeScaleBar = useCallback(
    (newValue: number) => {
      setScaleValue(Math.round(newValue));
    },
    [scaleValue]
  );

  const onMouseUpScaleBar = useCallback(() => {
    setSendedScaleValue(scaleValue);
  }, [scaleValue]);

  return (
    <Wrapper>
      <TextField />
      <ShownValue>{scaleValue}</ShownValue>
      <ScaleBar maxValue={100} minValue={0} value={0} onChange={onChangeScaleBar} onMouseUp={onMouseUpScaleBar} />
      <ShownValue>{sendedScaleValue}</ShownValue>
    </Wrapper>
  );
});
