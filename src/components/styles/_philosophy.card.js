import styled from "@emotion/styled";
import { fontFamily } from "../constants";

export const Container = styled.div`
  display: grid;
  border-radius: 8px;
  background-color: #fff;
  grid-template-rows: 100px 60px 1fr;
  gap: 5px;
  padding: 10px 20px;
  filter: drop-shadow(0 0 1rem rgb(241 65 70 / 0.2));

  & h4 {
    padding: 0px;
    margin: 10px;
    font-family: ${fontFamily};
  }

  & p {
    margin: 0;
  }
`;
