import * as React from 'react';
import { TweenLite, TimelineLite } from 'gsap';
import Photo from '../../../assets/images/profile.jpg';
import { SWrapper, AImage, ATextWrapper } from './styles';
import Span from '../../shared/AnimatedSpan';

class Home extends React.Component {
  picture = null;
  myTween = null;

  titleTween = new TimelineLite();
  title = [];
  desc1 = [];
  desc2 = [];

  componentDidUpdate = prevProps => {
    if (
      !prevProps.navigateState.redirecting &&
      this.props.navigateState.redirecting
    ) {
      this.myTween = TweenLite.to(this.picture, 0.5, {
        y: '20vh',
        opacity: 0,
        onComplete: () => {
          this.props.outroAnimationDone();
        },
      });
    }
  };

  componentDidMount = () => {
    this.myTween = TweenLite.from(this.picture, 0.5, {
      y: '-20vh',
      opacity: 0,
    });
    this.titleTween.timeScale(3);
    this.titleTween
      .staggerFrom(this.title, 0.2, { autoAlpha: 0, rotation: 90 }, 0.2)
      .staggerFrom(
        this.desc1,
        0.2,
        { autoAlpha: 0, rotation: 90 },
        0.2,
        '-=0.5'
      )
      .staggerFrom(this.desc2, 0.2, { autoAlpha: 0, rotation: 90 }, 0.1, '-=2');
  };

  render() {
    return (
      <SWrapper ref={ref => (this.picture = ref)}>
        <AImage src={Photo} alt="Github Pictures" />
        <ATextWrapper>
          <Span innerRef={this.title}>Denis.Z</Span>
          <Span innerRef={this.desc1}>Javascript Freelance</Span>
          <Span innerRef={this.desc2}>
            React Native - React JS - Node JS - GraphQL
          </Span>
        </ATextWrapper>
      </SWrapper>
    );
  }
}

export default Home;
