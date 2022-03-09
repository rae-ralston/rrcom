import styled from "@emotion/styled";
import { fontFamily, colors } from "../constants";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  border-right: 2px solid blue;
  background-color: ${colors.white};
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  & h3 {
    padding: 0;
    padding-left: 10px;
    margin: 0;
  }

  & a {
    font-weight: 700;
    color: #101c2a;
    text-decoration: none;
    padding: 20px 40px;
    background-color: #ffd54e;
    border: 0;
    font-family: ${fontFamily}
    font-size: 25px;
    cursor: pointer;
  }
`;
