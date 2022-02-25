import styled from "@emotion/styled";

export const Container = styled.article`
  grid-area: contact;
  background-color: #101c2a;
  color: #fff;
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 15px;
  padding: 15px;

  & h1 {
    font-size: 50px;
    font-family: "Courier New", monospace;
    grid-column: 1/-1;
  }
`;
