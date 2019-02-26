import * as React from 'react';
import { SWrapper, SResumeWrapper, SResumeText } from './styles';

class Intro extends React.Component {
  state = {
    introAnimation: false,
  };

  componentDidUpdate = prevProps => {
    if (
      !prevProps.navigateState.redirecting &&
      this.props.navigateState.redirecting
    ) {
      this.setState(
        state => ({
          ...state,
          introAnimation: false,
        }),
        () => {
          setTimeout(() => {
            this.props.outroAnimationDone();
          }, 1000);
        }
      );
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(state => ({
        ...state,
        introAnimation: true,
      }));
    }, 200);
  }

  render() {
    const { introAnimation } = this.state;

    return (
      <SWrapper>
        <SResumeWrapper introAnimation={introAnimation}>
          <SResumeText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </SResumeText>
        </SResumeWrapper>
      </SWrapper>
    );
  }
}

export default Intro;
