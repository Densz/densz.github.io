import * as React from 'react';
import styled from 'src/styles/styled-components';
import PageWithNavigationHOC from '../shared/nav/PageWithNavHOC';
import colors from '../../constants/colors';

import Hypertube from '../../assets/images/projects/hypertube.gif';
import Matcha from '../../assets/images/projects/matcha.gif';
import Chatbot from '../../assets/images/projects/chatbot.gif';
import { tablets, STitle, SDescription, SLink } from '../../styles/common';

const ProjectsList = [
  {
    title: 'Hypertube - Streaming website',
    img: Hypertube,
    link: {
      website: '',
      github: 'https://github.com/Densz/hypertube',
    },
    description:
      'PopCornTime Streaming Web Application with BitTorrent protocol.',
    li: ['React JS', 'Node JS', 'Express JS', 'Mongo DB'],
  },
  {
    title: 'Matcha - Dating Web App',
    img: Matcha,
    link: {
      website: '',
      github: 'https://github.com/Densz/matcha',
    },
    description:
      'Dating website with like and dislike swipe feature, notifications and real-time chat.',
    li: ['Node JS', 'Express JS', 'EJS Template', 'Mongo DB', 'Socker.io'],
  },
  {
    title: 'Luton Airport ChatBot',
    img: Chatbot,
    link: {
      website: '',
      github: '',
    },
    description:
      'Winner of the HEC Challenge - Data science with Chat Bot on Facebook Messenger in partnership with Luton Airport (London, UK).',
    li: ['Node JS', 'Recast.ai', 'Facebook Messenger API'],
  },
];

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

class Projects extends React.Component<IProps, {}> {
  public render() {
    return (
      <SWrapper>
        {ProjectsList.map(data => {
          return this.renderProjects(
            data.title,
            data.img,
            data.link,
            data.description,
            data.li
          );
        })}
      </SWrapper>
    );
  }

  public componentDidUpdate = (prevProps: IProps) => {
    if (
      !prevProps.navigateState.redirecting &&
      this.props.navigateState.redirecting
    ) {
      this.props.outroAnimationDone();
    }
  };

  private renderProjects(
    title: string,
    img: string,
    link: ILink,
    description: string,
    li: string[]
  ) {
    return (
      <SWrapperRow key={description}>
        <SImageWrapper>
          <SProjectImage src={img} alt={description} />
        </SImageWrapper>
        <SDescriptionWrapper>
          <STitle>{title}</STitle>
          <SDescription>{description}</SDescription>
          {link.github && <SLink href={link.github}>Github link</SLink>}
          {link.website && <SLink href={link.website}>{link.website}</SLink>}
        </SDescriptionWrapper>
      </SWrapperRow>
    );
  }
}

export default PageWithNavigationHOC(Projects);

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: auto;
  background-color: ${colors.black};
  padding-top: 150px;
`;

const SWrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-bottom: 50px;
  ${tablets(`
    flex-direction: column;
    width: 100%;
    align-items: center;
  `)};
`;

const SImageWrapper = styled.div`
  flex: 1;
`;

const SProjectImage = styled.img`
  width: 90%;
  margin-left: 5%;
`;

const SDescriptionWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  color: ${colors.white};
  ${tablets(`
    margin-left: 0;
    text-align: center;
  `)};
`;
