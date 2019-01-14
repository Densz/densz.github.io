import * as React from 'react';
import styled from 'src/styles/styled-components';

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
            <SLinkWrapper>
              <div>
                <SNavButton onClick={this.navigateTo} value="/">
                  Home
                </SNavButton>
              </div>
              <div>
                <SNavButton onClick={this.navigateTo} value="/projects">
                  Projects
                </SNavButton>
              </div>
              <div>
                <SNavAhref href="https://github.com/Densz" target="_blank">
                  Github
                </SNavAhref>
              </div>
              <div>
                <SNavAhref
                  href="https://twitter.com/Denis_Zheng"
                  target="_blank"
                >
                  Twitter
                </SNavAhref>
              </div>
            </SLinkWrapper>
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

const SNavWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
`;

const SLinkWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const SNavButton = styled.button`
  padding: 0;
  color: black;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.2em;
  font-family: 'Quicksand', sans-serif;
  text-decoration: underline;
`;

const SNavAhref = styled.a`
  color: black;
  font-size: 1.2em;
  font-family: 'Quicksand', sans-serif;
  text-decoration: underline;
`;
