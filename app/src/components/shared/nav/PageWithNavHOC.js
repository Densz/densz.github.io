import * as React from 'react';
import SocialButton from '../../shared/SocialButton';
import {
  SNavButton,
  SLeftLinkContainer,
  SLeftBottomLinkContainer,
  SRightLinkContainer,
  SSocialLinksWrapper,
  SLeftAnimatedUnderline,
  SRightAnimatedUnderline,
  SLeftBottomAnimatedUnderline,
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

export const PageWithNavHOC = WrappedComponent =>
  class Nav extends React.Component {
    state = {
      redirecting: false,
      route: '',
    };

    render() {
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

          <SLeftBottomLinkContainer>
            <SNavButton onClick={this.navigateTo} value="/presentation">
              PRESENTATION -
            </SNavButton>
            <SLeftBottomAnimatedUnderline />
          </SLeftBottomLinkContainer>

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
              <SocialButton
                type={data.type}
                url={data.url}
                alt={data.alt}
                key={data.alt}
              />
            ))}
          </SSocialLinksWrapper>
          <WrappedComponent
            navigateState={this.state}
            outroAnimationDone={this.outroAnimationDone}
          />
        </>
      );
    }

    outroAnimationDone = () => {
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

    navigateTo = event => {
      const value = event.target.value;

      this.setState(state => ({
        ...state,
        redirecting: this.props.location.pathname !== value,
        route: value,
      }));
    };
  };

export default PageWithNavHOC;
