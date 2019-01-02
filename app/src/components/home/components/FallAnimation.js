import React, { Component } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import logo from '../../../assets/images/Denis.png';

class FallAnimation extends Component {
  state = {
    logoAnimation: false,
  };

  componentDidMount() {
    this.setState(state => ({
      ...state,
      logoAnimation: !state.logoAnimation,
    }));
    setTimeout(() => {
      this.setState(state => ({
        ...state,
        logoAnimation: !state.logoAnimation,
      }));
    }, 3000);
  }

  render() {
    const { logoAnimation } = this.state;

    return (
      <SWrapper>
        <AWrapperImage pose={logoAnimation ? 'visible' : 'hidden'}>
          <img src={logo} alt="logo" />
        </AWrapperImage>
      </SWrapper>
    );
  }
}

export default FallAnimation;

const SWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const imageDropProps = {
  hidden: {
    bottom: 2000,
    transition: {
      duration: 700,
    },
  },
  visible: {
    bottom: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
};

const AWrapperImage = styled(posed.div(imageDropProps))`
  position: absolute;
  width: 210px;
  height: 400px;
  left: 50%;
  transform: translate(-50%);
`;
