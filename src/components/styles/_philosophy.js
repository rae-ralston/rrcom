import styled from "@emotion/styled";

export const Container = styled.article`
  grid-area: about;
  background-color: salmon;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 25px;
  padding: 75px 40px 100px 40px;

  & h2 {
    font-family: "Courier New", monospace;
    font-size: 50px;
  }

  & .overview {
    grid-column: 1/-1;
  }
`;
