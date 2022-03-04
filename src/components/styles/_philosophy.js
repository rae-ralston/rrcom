import styled from "@emotion/styled";

export const Container = styled.article`
  grid-area: about;
  background: rgb(255, 213, 78);
  background: linear-gradient(
    0deg,
    rgba(255, 213, 78, 1) 0%,
    rgba(246, 174, 56, 1) 100%
  );
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 25px;
  padding: 75px 40px 100px 40px;

  & h2 {
    font-family: "Courier Prime", "Courier New", monospace;
    font-size: 50px;
  }

  & .overview {
    grid-column: 1/-1;
  }
`;
