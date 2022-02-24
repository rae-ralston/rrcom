import styled from "@emotion/styled";

export const Container = styled.article`
  grid-area: landing;
  background-color: #101c2a;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  align-items: center;
  justify-content: center;
  padding: 50px;

  & h1 {
    font-family: "Courier New", monospace;
    font-size: 60px;
  }

  & p {
    font-size: 30px;
  }
`;
