import React from 'react';
import {
  StyledContainer,
  ImageWrapper,
  ImageContainer,
  Image,
  StyledTimes,
  StyledArrowBack,
  StyledArrowForward
} from './style';

const FullScreenImage = ({ src, alt, clickHandler }) => {
  return (
    <ImageContainer onClick={e => clickHandler(e)}>
      <StyledContainer>
        <ImageWrapper>
          <Image src={src} alt={alt} />
        </ImageWrapper>
      </StyledContainer>
      <StyledTimes />
      <StyledArrowBack />
      <StyledArrowForward />
    </ImageContainer>
  );
};

export default FullScreenImage;
