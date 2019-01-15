import styled from 'src/styles/styled-components';
import posed from 'react-pose';
import colors from '../../../constants/colors';
import { tablets } from '../../../styles/common';

const imagePose = {
  hidden: {
    y: -700,
    opacity: 0,
    transition: {
      duration: 400,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1000,
    },
  },
};

const textPose = {
  hidden: {
    width: 0,
    transition: {
      duration: 500,
    },
  },
  visible: {
    width: 'auto',
    transition: {
      duration: 500,
    },
  },
};

export const SWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  ${tablets(`
    flex-direction: column;
  `)}
`;

export const AImage = styled(posed.img(imagePose))`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  ${tablets(`
    margin-left: 20px;
  `)}
`;

export const ATextWrapper = styled(posed.div(textPose))`
  overflow: hidden;
  white-space: nowrap;
  margin-left: 50px;
  color: white;
  ${tablets(`
    white-space: initial;
  `)}
`;

export const SText = styled.p`
  font-size: 2em;
  font-family: 'Quicksand', sans-serif;
  color: white;
  ${tablets(`
    font-size: 1.5em;
  `)}
`;
