import * as React from 'react';
import styled from 'src/styles/styled-components';
import PageWithNavigationHOC from '../shared/nav/PageWithNavHOC';
import colors from '../../constants/colors';
import projectsJson from './ProjectsContent';
import { tablets, SLink } from '../../styles/common';
import SocialButton from 'src/components/shared/SocialButton';

const HeightRow = 170;

interface ILink {
  github?: string;
  website?: string;
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

interface IState {
  introAnimation: boolean;
  animationStarted: boolean;
  positionY: number;
  index: number;
}

class Projects extends React.Component<IProps, IState> {
  public state = {
    introAnimation: false,
    animationStarted: false,
    positionY: 0,
    index: 0,
  };

  public onWheel = (e: any) => {
    e.preventDefault();
    const deltaY = e.deltaY; // user.persist()
    const { animationStarted, index } = this.state;
    if (animationStarted === false) {
      if (
        (index === 0 && deltaY < 0) ||
        (index === projectsJson.length - 1 && deltaY > 0)
      ) {
        return;
      }
      this.setState(state => ({
        ...state,
        animationStarted: true,
        positionY:
          deltaY < 0
            ? state.positionY + HeightRow
            : state.positionY - HeightRow,
        index: deltaY < 0 ? state.index - 1 : state.index + 1,
      }));
    }
  };

  public onAnimationEnd = () => {
    this.setState(state => ({
      ...state,
      animationStarted: false,
    }));
  };

  public componentDidMount() {
    setTimeout(() => {
      this.setState(state => ({
        ...state,
        introAnimation: true,
      }));
    }, 200);
  }

  public componentDidUpdate = (prevProps: IProps) => {
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
          }, 1500);
        }
      );
    }
  };

  public render() {
    const { introAnimation, positionY, index } = this.state;

    return (
      <SWrapper onWheel={this.onWheel}>
        <SProjectsWrapper
          positionY={positionY}
          introAnimation={introAnimation}
          onTransitionEnd={this.onAnimationEnd}
        >
          {projectsJson.map((data, i) => {
            return this.renderProjects(
              data.title,
              data.link,
              data.description,
              data.li,
              index === i
            );
          })}
        </SProjectsWrapper>
      </SWrapper>
    );
  }

  private renderProjects(
    title: string,
    link: ILink,
    description: string,
    li: string[],
    selected: boolean
  ) {
    return (
      <SWrapperRow key={description} selected={selected}>
        <SDescriptionWrapper>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <STitle>{title}</STitle>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                transition: '1s',
                opacity: selected ? 1 : 0,
                transform: `translateX(${selected ? '0' : '400px'})`,
              }}
            >
              <SocialButton
                type="github"
                alt="test"
                url="http://www.google.fr"
              />
              <SocialButton
                type="twitter"
                alt="test"
                url="http://www.google.fr"
              />
            </div>
          </div>
          <div
            style={{
              transition: 'opacity 1s',
              opacity: selected ? 1 : 0,
            }}
          >
            <STechnoText>
              {li.map(
                (data, i) => `${data} ${i === li.length - 1 ? '' : '~ '}`
              )}
            </STechnoText>
            <SDescriptionText>{description}</SDescriptionText>
          </div>
        </SDescriptionWrapper>
      </SWrapperRow>
    );
  }
}

export default PageWithNavigationHOC(Projects);

const SWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const SProjectsWrapper = styled('div')<{
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

const SWrapperRow = styled('div')<{ selected: boolean }>`
  width: 60%;
  height: ${HeightRow}px;
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

const SDescriptionWrapper = styled.div`
  color: ${colors.white};
`;

const STitle = styled.h2`
  font-family: 'Quicksand', sans-serif;
  font-size: 3em;
  margin: 0 0 0 0;
`;

const SDescriptionText = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: 1em;
`;

const STechnoText = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: 1.3em;
`;
