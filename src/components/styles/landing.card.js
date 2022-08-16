import styled from "@emotion/styled";

export default styled.div`
  padding: 40px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.mainTextColor};
  cursor: pointer;

  a {
    color: ${(props) => props.mainTextColor};
  }

  h1 {
    font-size: 50px;
    font-family: ${(props) => props.headlineFont};
  }

  &:hover {
    h1 {
      transform: scale(1.5, 1.5);
      transition: all 0.3s;
    }
  }
`;
