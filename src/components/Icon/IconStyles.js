import styled from 'styled-components';

export const IconBase = styled.svg`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  fill: #9e9e9e;
  pointer-events: none; // Makes the icon non-interactive
`;