import * as React from 'react';

import Photo from '../../../assets/images/profile.jpg';
import { STitle } from '../../../styles/common';
import { SWrapper, AImage, ATextWrapper, SText } from './styles';

class Home extends React.Component {
  state = {
    imageAnimation: false,
    textAnimation: false,
  };

  componentDidUpdate = prevProps => {
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

  componentDidMount = () => {
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

  render() {
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

export default Home;
