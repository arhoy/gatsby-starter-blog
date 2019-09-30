import React, { useState } from 'react';
import styled from '@emotion/styled';

const Div = styled.div`
  padding: 1rem;
  background: ${props => props.theme.colors.primaryLight};
`;

const Button = styled.button`
  outline: none;
  margin: 1rem 0;
  border: none;
  padding: 0.7rem 1rem;
  border: 3px solid ${props => props.theme.colors.primary};
  background: transparent;
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    font-weight: bold;
  }
`;

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const addWave = () => {
    setWaves(prevWave => prevWave + 1);
  };
  return (
    <Div>
      <p>
        <span role="img" aria-label="hand-wave">
          👋
        </span>
        You have waved {waves} {waves === 1 ? 'time' : 'times'}
      </p>
      <Button onClick={addWave}>Click to wave</Button>
    </Div>
  );
};

export default Wave;
