import styled from "@emotion/styled";
import { fontFamily } from "../constants";

export const Container = styled.div`
  grid-area: testimonials;
  background: #3b81e1;
  padding: 40px;

  & h3 {
    font-family: ${fontFamily}
    font-size: 50px;
  }

  & .button-container {
    padding: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;

    & button {
      padding: 10px 20px;
      background-color: #fff;
      border-radius: 12px;
      border: 1px solid #101c2a;
    }
  }
`;
