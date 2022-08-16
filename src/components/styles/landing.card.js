import styled from "@emotion/styled";

export default styled.div`
  padding: 40px;
  background-color: ${(props) => props.background};
  color: ${(props) => props.mainText};
  cursor: pointer;

  h1 {
    font-size: 50px;
    ${(props) => props.headlineFont}
  }

  &:hover {
    h1 {
      transform: scale(1.5, 1.5);
      transition: all 0.3s;
    }
  }
`;
