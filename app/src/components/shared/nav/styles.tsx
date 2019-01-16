import styled from 'src/styles/styled-components';
import colors from '../../../constants/colors';

/* -------------- */
/* -- TOP MENU -- */
/* -------------- */
export const SRightLinkContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

export const SLeftLinkContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1000;
`;

export const SNavButton = styled.button`
  padding: 0;
  color: ${colors.white};
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1em;
  font-family: 'Quicksand', sans-serif;
  text-decoration: none;
  z-index: 1000;
`;

export const SLeftAnimatedUnderline = styled.div`
  background-color: ${colors.white};
  width: 0px;
  height: 3px;
  transition: width 0.25s;
  z-index: 1000;
  ${SLeftLinkContainer}:hover & {
    width: 100%;
  }
`;

export const SRightAnimatedUnderline = styled.div`
  background-color: ${colors.white};
  float: right;
  width: 0px;
  height: 3px;
  transition: width 0.5s;
  z-index: 1000;
  ${SRightLinkContainer}:hover & {
    width: 100%;
  }
`;

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
