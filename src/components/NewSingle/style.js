import Star from "react-icons/lib/fa/star";
import styled from "styled-components";

const favorite = {
  color: "gold"
};

const standart = {
  color: "aliceblue"
};

const StyledStar = styled(Star)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  opacity: 0.8;
  color: ${props => props.theme.color};
  transition-duration: 0.3s;
  transition-delay: 0.15s;

  :hover {
    transform: rotate(145deg);
    cursor: pointer;
  }
`;

export { favorite, standart, StyledStar };
