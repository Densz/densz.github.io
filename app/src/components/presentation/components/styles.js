import styled from 'styled-components';
import colors from '../../../constants/colors';

export const SWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  color: ${colors.white};
  font-family: 'Quicksand', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SResumeWrapper = styled.div`
  width: 80%;
  max-width: 600px;
  transition: 1s;
  transform: translateX(${p => (!p.introAnimation ? '-100vw' : '0')})
    translateY(${p => (!p.introAnimation ? '100vh' : '0')}) rotate(-5deg);
`;

export const SResumeText = styled.p`
  font-size: 1.5em;
`;
