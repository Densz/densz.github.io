import * as React from 'react';
import SocialButton from 'src/components/shared/SocialButton';
import {
  SNavButton,
  SLeftLinkContainer,
  SRightLinkContainer,
  SSocialLinksWrapper,
  SLeftAnimatedUnderline,
  SRightAnimatedUnderline,
} from './styles';

const socials = [
  {
    alt: 'Github',
    url: 'https://github.com/Densz',
    type: 'github',
  },
  {
    alt: 'LinkedIn',
    url: 'https://github.com/Densz',
    type: 'linkedin',
  },
  {
    alt: 'Twitter',
    url: 'https://twitter.com/Denis_Zheng',
    type: 'twitter',
  },
];
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
          {/* -------------- */
          /* -- TOP MENU -- */
          /* -------------- */}
          <SLeftLinkContainer>
            <SNavButton onClick={this.navigateTo} value="/">
              DZ -
            </SNavButton>
            <SLeftAnimatedUnderline />
          </SLeftLinkContainer>
          <SRightLinkContainer>
            <SNavButton onClick={this.navigateTo} value="/projects">
              - PROJECTS
            </SNavButton>
            <SRightAnimatedUnderline />
          </SRightLinkContainer>
          {/* -------------------------- */
          /* ------- SOCIAL LINKS ------ */
          /* --------------------------- */}
          <SSocialLinksWrapper>
            {socials.map(data => (
              <SocialButton type={data.type} url={data.url} alt={data.alt} />
            ))}
          </SSocialLinksWrapper>
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
