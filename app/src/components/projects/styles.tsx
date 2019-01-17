import styled from 'src/styles/styled-components';
import colors from '../../constants/colors';
import { tablets } from '../../styles/common';
import { PROJECT_ROW_HEIGHT } from 'src/constants/projects';

export const SWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const SProjectsWrapper = styled('div')<{
  positionY: number;
  introAnimation: boolean;
}>`
  position: absolute;
  margin-left: 20vw;
  width: 80vw;
  top: 50%;
  margin-top: -100px;
  transition: 1.5s;
  transform: translateX(${p => (!p.introAnimation ? '100vw' : '0')})
    translateY(${p => (!p.introAnimation ? '-100vh' : `${p.positionY}px`)});
`;

export const SWrapperRow = styled('div')<{ selected: boolean }>`
  width: 60%;
  height: ${PROJECT_ROW_HEIGHT}px;
  transition: 1s;
  transform: translateX(${p => (p.selected ? 50 : 0)}px)
    scale(${p => (p.selected ? 1.3 : 1)}) rotate(-5deg);
  transform-origin: left;
  opacity: ${p => (p.selected ? 1 : 0.5)};
  margin-bottom: ${p => (p.selected ? 30 : 0)}px;
  ${tablets(`
  flex-direction: column;
  width: 100%;
  align-items: center;
`)};
`;

export const SDescriptionWrapper = styled.div`
  color: ${colors.white};
`;

export const STitle = styled.h2`
  font-family: 'Quicksand', sans-serif;
  font-size: 3em;
  margin: 0 0 0 0;
`;

export const SDescriptionText = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: 1em;
`;

export const STechnoText = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: 1.3em;
`;
