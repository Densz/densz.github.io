import * as React from 'react';
import {
  SNavButton,
  SLeftLinkContainer,
  SRightLinkContainer,
  SSocialLinksWrapper,
  SSocialContainer,
  SSocialImage,
  SLeftAnimatedUnderline,
  SRightAnimatedUnderline,
} from './styles';
import github from '../../../assets/icon/github.png';
import twitter from '../../../assets/icon/twitter.png';
import linkedin from '../../../assets/icon/linkedin.png';

const socials = [
  {
    title: 'Github',
    url: 'https://github.com/Densz',
    img: github,
  },
  {
    title: 'LinkedIn',
    url: 'https://github.com/Densz',
    img: linkedin,
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/Denis_Zheng',
    img: twitter,
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

interface ISocials {
  title: string;
  url: string;
  img: string;
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
            {socials.map(data => this.renderSocials(data))}
          </SSocialLinksWrapper>
          <WrappedComponent
            navigateState={this.state}
            outroAnimationDone={this.outroAnimationDone}
          />
        </>
      );
    }

    private renderSocials({ title, url, img }: ISocials) {
      return (
        <SSocialContainer href={url} target="_blank" key={title}>
          <SSocialImage src={img} alt={title} />
          <SSocialImage src={img} alt={title} />
        </SSocialContainer>
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
