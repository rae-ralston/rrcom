import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  border-radius: 4px;
  background-color: #fff;
  grid-template-rows: 100px 60px 1fr;
  gap: 5px;
  padding: 10px;

  & h4 {
    padding: 0px;
    margin: 10px;
  }

  & p {
    margin: 0;
  }
`;
