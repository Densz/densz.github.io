import * as React from 'react';
import {
  SNavWrapper,
  SNavButton,
  SLeftLinkContainer,
  SRightLinkContainer,
  SSocialLinksWrapper,
  SSocialContainer,
  SSocialImage,
} from './styles';
import github from '../../../assets/icon/github.png';
import twitter from '../../../assets/icon/twitter.png';

interface IState {
  redirecting: boolean;
  route?: string;
}

interface IProps {
  location: {
    pathname: string;
  };
  history: {
    push: ((path: string) => void);
  };
}

export const PageWithNavHOC = (WrappedComponent: any) =>
  class Nav extends React.Component<IProps, IState> {
    public state = {
      redirecting: false,
      route: '',
    };

    public render() {
      return (
        <>
          <SNavWrapper>
            {/* -------------- */
            /* -- TOP MENU -- */
            /* -------------- */}
            <SLeftLinkContainer>
              <SNavButton onClick={this.navigateTo} value="/">
                DZ -
              </SNavButton>
            </SLeftLinkContainer>
            <SRightLinkContainer>
              <SNavButton onClick={this.navigateTo} value="/projects">
                - PROJECTS
              </SNavButton>
            </SRightLinkContainer>
            {/* -------------------------- */
            /* ------- SOCIAL LINKS ------ */
            /* --------------------------- */}
            <SSocialLinksWrapper>
              <SSocialContainer href="https://github.com/Densz" target="_blank">
                <SSocialImage src={github} alt="github" />
                <SSocialImage src={github} alt="github" />
              </SSocialContainer>
              <SSocialContainer href="https://github.com/Densz" target="_blank">
                <SSocialImage src={twitter} alt="twitter" />
                <SSocialImage src={twitter} alt="twitter" />
              </SSocialContainer>
            </SSocialLinksWrapper>
          </SNavWrapper>
          <WrappedComponent
            navigateState={this.state}
            outroAnimationDone={this.outroAnimationDone}
          />
        </>
      );
    }

    private outroAnimationDone = () => {
      if (this.state.redirecting) {
        this.setState(
          state => ({
            ...state,
            redirecting: false,
          }),
          () => {
            this.props.history.push(this.state.route);
          }
        );
      }
    };

    private navigateTo = (event: any) => {
      const value = event.target.value;

      this.setState(state => ({
        ...state,
        redirecting: this.props.location.pathname !== value,
        route: value,
      }));
    };
  };

export default PageWithNavHOC;
