import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledContainer,
  ImageWrapper,
  ImageContainer,
  Image,
  StyledTimes,
  StyledArrowBack,
  StyledArrowForward
} from './style';

const FullScreenImage = ({ src, alt, clickHandler, back, forward }) => {
  return (
    <ImageContainer onClick={e => clickHandler(e)}>
      <StyledContainer>
        <ImageWrapper>
          <Image src={src} alt={alt} />
        </ImageWrapper>
      </StyledContainer>
      <Link to="/images">
        <StyledTimes />
      </Link>
      {back && (
        <Link to={`/images/${back}`}>
          <StyledArrowBack />
        </Link>
      )}
      {forward && (
        <Link to={`/images/${forward}`}>
          <StyledArrowForward />
        </Link>
      )}
    </ImageContainer>
  );
};

export default FullScreenImage;
