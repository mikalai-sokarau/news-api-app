import styled from "styled-components";
import globe from 'react-icons/lib/fa/globe'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledContainer = styled.nav`
  display: flex;
`;

const StyledGlobe = styled(globe)`
  font-size: 2rem;
  margin-left: 15px;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  transition-delay: 0.15s;

  :hover {
    transform: rotate(360deg);
    cursor: pointer;
  }
`;

export { StyledDiv, StyledContainer, StyledGlobe };
