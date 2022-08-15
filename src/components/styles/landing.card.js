import styled from "@emotion/styled";
import { colors } from "../constants";

const { white, black, lightGray } = colors;

const hovering = `
  background-color: ${white};
  color: ${black};
`;

export default styled.div`
  padding: 0 40px;
  background-color: ${black};
  color: ${lightGray};
  ${(props) => props.hovering && hovering}
`;
