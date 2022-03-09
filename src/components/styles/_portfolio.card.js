import styled from "@emotion/styled";
import { fontFamily } from "../constants.js";

export const Card = styled.div`
  border-radius: 12px;
  border: 1px solid #01133b;
  margin: 10px 20px;
  width: 250px;
  height: 250px;
  position: relative;
  text-align: center;
  color: white;
  background-color: #01133b;

  & h3 {
    font-family: ${fontFamily};
  }

  & img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
    object-position: 50% 0%;
  }
`;
