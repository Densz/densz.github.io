import React from 'react';
import styled from 'styled-components';
import colors from '../../../constants/colors';
import Photo from '../../../assets/images/profile.jpg';

const SWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

const STextWrapper = styled.div`
  margin-left: 50px;
`;

const SText = styled.p`
  font-size: 2em;
`;

const Presentation = () => {
  return (
    <SWrapper>
      <SImage src={Photo} alt="Github Pictures" />
      <STextWrapper>
        <SText>Denis ZHENG</SText>
        <SText>Javascript Freelance</SText>
        <SText>React Native - React JS - Node JS - GraphQL</SText>
      </STextWrapper>
    </SWrapper>
  );
};

export default Presentation;
