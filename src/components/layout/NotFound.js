import React from 'react';
import { Link } from 'react-router-dom';
import scarecrow from './scarecrow.png';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  ${
    '' /* @media ${(props) => props.theme.mediaQueries.medium} {
    width: 65%;
  } */
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 6rem;
`;
const Title = styled.h1`
  color: var(--color-primary);
  font-weight: 300;
  font-size: 3.5rem;
`;
const LinkWrapper = styled(Link)`
  text-decoration: none;
`;
const Subtitle = styled.h2`
  color: var(--color-primary);
  font-weight: 700;
  font-size: 1.8rem;
`;
const Svg = styled.img`
  max-width: 100%;
  height: 40vh;
  margin-bottom: 6rem;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Oops</Title>
        <Subtitle>Something went wrong!</Subtitle>
      </TitleWrapper>
      <Svg src={scarecrow} alt='Not found' />
    </Wrapper>
  );
};

export default NotFound;
