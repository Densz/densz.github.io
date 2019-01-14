import * as React from 'react';
import styled from 'src/styles/styled-components';

export const PageWithNavHOC = (WrappedComponent: any) =>
  class Nav extends React.Component {
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
                <button onClick={this.navigateTo} value="/">
                  Home
                </button>
              </div>
              <div>
                <button onClick={this.navigateTo} value="/projects">
                  Projects
                </button>
              </div>
              <div>
                <a href="https://github.com/Densz" target="_blank">
                  Github
                </a>
              </div>
              <div>
                <a href="https://twitter.com/Denis_Zheng" target="_blank">
                  Twitter
                </a>
              </div>
            </SLinkWrapper>
          </SNavWrapper>
          <WrappedComponent navigateState={this.state} />
        </>
      );
    }

    private navigateTo = (event: any) => {
      this.setState(state => ({
        ...state,
        redirecting: true,
        route: event.target.value,
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
