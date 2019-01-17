import * as React from 'react';
import PageWithNavigationHOC from '../shared/nav/PageWithNavHOC';
import projectsJson from './ProjectsContent';
import { SLink } from '../../styles/common';
import ProjectRow from './ProjectRow';
import {
  SWrapper,
  SProjectsWrapper,
  SWrapperRow,
  SDescriptionWrapper,
  STitle,
  SDescriptionText,
  STechnoText,
} from './styles';
import { PROJECT_ROW_HEIGHT } from 'src/constants/projects';

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
            ? state.positionY + PROJECT_ROW_HEIGHT
            : state.positionY - PROJECT_ROW_HEIGHT,
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
            return (
              <ProjectRow
                title={data.title}
                link={data.link}
                description={data.description}
                li={data.li}
                selected={index === i}
                key={data.title}
              />
            );
          })}
        </SProjectsWrapper>
      </SWrapper>
    );
  }
}

export default PageWithNavigationHOC(Projects);
