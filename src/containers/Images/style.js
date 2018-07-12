import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    width: calc(100% / 4);
  }
`;

export default StyledContainer;
