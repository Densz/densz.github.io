import * as React from 'react';
import posed from 'react-pose';
import styled from 'src/styles/styled-components';
import logo from '../../../assets/images/Denis.png';

interface IState {
  logoAnimation: boolean;
}

class FallAnimation extends React.Component<{}, IState> {
  public state = {
    logoAnimation: false,
  };

  public render() {
    const { logoAnimation } = this.state;

    return (
      <SWrapper>
        <AWrapperImage pose={logoAnimation ? 'visible' : 'hidden'}>
          <img src={logo} alt="logo" />
        </AWrapperImage>
      </SWrapper>
    );
  }

  public componentDidMount() {
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
      damping: 15,
      stiffness: 300,
      type: 'spring',
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
