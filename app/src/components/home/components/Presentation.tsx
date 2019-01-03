import * as React from 'react';
import posed from 'react-pose';
import styled from 'src/styles/styled-components';

import Photo from '../../../assets/images/profile.jpg';
import colors from '../../../constants/colors';
import { STitle, tablets } from '../../../styles/common';

interface IState {
  imageAnimation: boolean;
  textAnimation: boolean;
}

class Presentation extends React.Component<{}, IState> {
  public state = {
    imageAnimation: false,
    textAnimation: false,
  };

  public componentDidMount = () => {
    this.setState(
      state => ({
        ...state,
        imageAnimation: true,
      }),
      () => {
        setTimeout(() => {
          this.setState(state => ({
            ...state,
            textAnimation: true,
          }));
        }, 1000);
      }
    );
  };

  public render() {
    const { imageAnimation, textAnimation } = this.state;

    return (
      <SWrapper>
        <AImage
          src={Photo}
          alt="Github Pictures"
          pose={imageAnimation ? 'visible' : 'hidden'}
        />
        <ATextWrapper pose={textAnimation ? 'visible' : 'hidden'}>
          <STitle>Denis ZHENG</STitle>
          <SText>Javascript Freelance</SText>
          <SText>React Native - React JS - Node JS - GraphQL</SText>
        </ATextWrapper>
      </SWrapper>
    );
  }
}

export default Presentation;

const imagePose = {
  hidden: {
    y: -400,
    opacity: 0,
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
  },
  visible: {
    width: 'auto',
    transition: {
      duration: 500,
    },
  },
};

const SWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  ${tablets(`
    flex-direction: column;
  `)}
`;

const AImage = styled(posed.img(imagePose))`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  ${tablets(`
    margin-left: 20px;
  `)}
`;

const ATextWrapper = styled(posed.div(textPose))`
  overflow: hidden;
  white-space: nowrap;
  margin-left: 50px;
  ${tablets(`
    white-space: initial;
  `)}
`;

const SText = styled.p`
  font-size: 2em;
  font-family: 'Quicksand', sans-serif;
  ${tablets(`
    font-size: 1.5em;
  `)}
`;
