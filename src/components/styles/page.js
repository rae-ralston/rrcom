import styled from "@emotion/styled";

export default styled.article`
  height: calc(100vh - 50px);
  padding: 40px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.mainTextColor};

  a {
    color: ${(props) => props.mainTextColor};
  }

  h1 {
    font-size: 50px;
    font-family: ${(props) => props.headlineFont};
  }
`;
