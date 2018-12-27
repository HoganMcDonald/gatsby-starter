import React from 'react';
import styled from 'styled-components';

import { white, primary } from '../styles/theme';

const Banner = styled.div`
  background-color: ${primary};
  width: 100%;
  height: 50vh;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  color: ${white};
  text-align: center;
`;

const SubHeading = styled.h2`
  color: ${white};
  text-align: center;
`;

const Hero = ({ title, subTitle }) => (
  <Banner>
    <Heading>{title}</Heading>
    <SubHeading>{subTitle}</SubHeading>
  </Banner>
);

export default Hero;
