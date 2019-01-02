import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../../../constants/colors';

import Hypertube from '../../../assets/images/hypertube.gif';
import Matcha from '../../../assets/images/matcha.gif';
import Chatbot from '../../../assets/images/chatbot.gif';
import { SDescription, SLink, STitle } from '../../../styles/common';

const ProjectsList = [
  {
    title: 'Hypertube - Streaming website',
    img: Hypertube,
    link: {
      website: null,
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
      website: null,
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
      website: null,
      github: null,
    },
    description:
      'Winner of the HEC Challenge - Data science with Chat Bot on Facebook Messenger in partnership with Luton Airport (London, UK).',
    li: ['Node JS', 'Recast.ai', 'Facebook Messenger API'],
  },
];

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: auto;
  background-color: ${colors.white};
  padding-top: 50px;
`;

const SWrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-bottom: 50px;
`;

const SProjectImage = styled.img`
  width: 40vw;
  height: 26vw;
`;

const SDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

class Projects extends Component {
  renderProjects(title, img, link, description, li) {
    return (
      <SWrapperRow key={description}>
        <SProjectImage src={img} alt={description} />
        <SDescriptionWrapper>
          <STitle>{title}</STitle>
          <SDescription>{description}</SDescription>
          {link.github && <SLink href={link}>Github link</SLink>}
          {link.website && <SLink href={link}>{link.website}</SLink>}
        </SDescriptionWrapper>
      </SWrapperRow>
    );
  }

  render() {
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
}

export default Projects;
