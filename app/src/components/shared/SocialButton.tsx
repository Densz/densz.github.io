import * as React from 'react';

import styled from 'src/styles/styled-components';
import colors from '../../constants/colors';

import github from '../../assets/icon/github.png';
import twitter from '../../assets/icon/twitter.png';
import linkedin from '../../assets/icon/linkedin.png';

interface IProps {
  type: string;
  url: string;
  alt: string;
}

const SocialButton = ({ type, url, alt }: IProps) => {
  let img = null;
  switch (type) {
    case 'github':
      img = github;
      break;
    case 'linkedin':
      img = linkedin;
      break;
    case 'twitter':
      img = twitter;
      break;
    default:
      break;
  }
  return (
    <SSocialContainer href={url} target="_blank" key={alt}>
      <SSocialImage src={img} alt={alt} />
      <SSocialImage src={img} alt={alt} />
    </SSocialContainer>
  );
};

export default SocialButton;

/* --------------------------- */
/* ------- SOCIAL LINKS ------ */
/* --------------------------- */
export const SSocialLinksWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  z-index: 1000;
`;

export const SSocialContainer = styled.a`
  position: relative;
  display: flex;
  width: 30px;
  height: 30px;
  border: 1px solid ${colors.white};
  border-radius: 50%;
  align-items: center;
  flex-direction: column;
  margin-left: 30px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1000;
`;

export const SSocialImage = styled.img`
  padding-top: 8px;
  width: 15px;
  height: 15px;
  transition: 0.25s;
  z-index: 1000;
  ${SSocialContainer}:hover & {
    transform: translate(0, -23px);
  }
`;
