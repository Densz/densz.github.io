import * as React from 'react';

import Photo from '../../../assets/images/profile.jpg';
import { STitle } from '../../../styles/common';
import { SWrapper, AImage, ATextWrapper, SText } from './styles';

interface IState {
  imageAnimation: boolean;
  textAnimation: boolean;
}

interface INavigateState {
  redirecting: boolean;
  route: string;
}

interface IProps {
  outroAnimationDone: (() => void);
  navigateState: {
    [key: string]: INavigateState;
  };
}

class Presentation extends React.Component<IProps, IState> {
  public state = {
    imageAnimation: false,
    textAnimation: false,
  };

  public componentDidUpdate = (prevProps: IProps) => {
    if (
      !prevProps.navigateState.redirecting &&
      this.props.navigateState.redirecting
    ) {
      this.setState(
        state => ({
          ...state,
          textAnimation: false,
        }),
        () => {
          setTimeout(() => {
            this.setState(
              state => ({
                ...state,
                imageAnimation: false,
              }),
              () => {
                setTimeout(() => {
                  this.props.outroAnimationDone();
                }, 400);
              }
            );
          }, 500);
        }
      );
    }
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
          <STitle>Denis.Z</STitle>
          <SText>Javascript Freelance</SText>
          <SText>React Native - React JS - Node JS - GraphQL</SText>
        </ATextWrapper>
      </SWrapper>
    );
  }
}

export default Presentation;
