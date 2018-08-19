import styled, { keyframes } from 'styled-components';
import Times from 'react-icons/lib/md/close';
import ArrowBack from 'react-icons/lib/fa/angle-left';
import ArrowForward from 'react-icons/lib/fa/angle-right';

const imageAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const timesAnimation = keyframes`
  0% { 
    transform: rotate(7deg);
    color: white;
  }
  20% { 
    transform: rotate(-7deg); 
  }
  40% { 
    transform: rotate(7deg); 
  }
  60% { 
    transform: rotate(-7deg);
  }
  80% {
    transform: rotate(7deg); 
  }
  100% { 
    transform: rotate(0deg); 
    color: red;
  }
`;

const arrowAnimation = keyframes`
  0% {
    color: white;
    transform: scale(0.8) rotateY(50deg);
  }
  20% {
    transform: scale(0.7) rotateY(30deg);
  }
  40% {
    transform: scale(1) rotateY(0deg);
  }
  60% {
    transform: scale(1.3) rotateY(-50deg);
  }
  100% {
    color: yellow;
    transform: scale(1) rotateY(0deg);
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  animation-name: ${imageAnimation};
  animation-duration: 1s;
`;

const ImageWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

const Image = styled.img`
  max-height: 90%;
  max-width: 80%;
`;

const StyledTimes = styled(Times)`
  font-size: 3em;
  color: whitesmoke;
  position: absolute;
  right: 1%;
  top: 1%;

  &:hover {
    cursor: pointer;
    color: red;
    animation: ${timesAnimation} 0.3s;
  }
`;

const StyledArrowBack = styled(ArrowBack)`
  font-size: 5em;
  color: white;
  position: absolute;
  left: 2%;
  top: 45%;

  &:hover {
    cursor: pointer;
    color: yellow;
    animation: ${arrowAnimation} 0.5s;
    animation-delay: 0.1s;
  }
`;

const StyledArrowForward = styled(ArrowForward)`
  font-size: 5em;
  color: white;
  position: absolute;
  right: 2%;
  top: 45%;

  &:hover {
    cursor: pointer;
    color: yellow;
    animation: ${arrowAnimation} 0.5s;
    animation-delay: 0.1s;
  }
`;

export {
  StyledContainer,
  ImageWrapper,
  ImageContainer,
  Image,
  StyledTimes,
  StyledArrowBack,
  StyledArrowForward
};
