import styled from 'styled-components';
import { tablets } from '../../../styles/common';

export const SWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${tablets(`
    flex-direction: column;
  `)}
`;

export const AImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  opacity: 1;
  ${tablets(`
    margin-left: 20px;
  `)}
`;

export const ATextWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin-left: 50px;
  font-family: 'Quicksand', sans-serif;
  font-size: 2em;
  color: white;
  ${tablets(`
    white-space: initial;
  `)}
`;

export const SText = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: 2em;
  color: white;
  ${tablets(`
    font-size: 1.5em;
  `)}
`;
