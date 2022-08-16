import styled from "@emotion/styled";

export default styled.article`
  height: calc(100vh - 50px);
  padding: 40px;
  background-color: ${(props) => props.background};
  color: ${(props) => props.mainText};

  a {
    color: ${(props) => props.mainText};
  }

  h1 {
    font-size: 50px;
    ${(props) => props.headlineFont}
  }
`;
