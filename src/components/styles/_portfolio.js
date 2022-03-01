import styled from "@emotion/styled";

export const Container = styled.article`
  grid-area: portfolio;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 15px;
  padding: 15px 15px 50px 15px;

  & .card-container {
    display: flex;
    flex-flow: row wrap;
  }
`;
