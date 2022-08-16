import styled from "@emotion/styled";
import { getHeadline, getBackground } from "./utils";

export default styled.div`
  padding: 0 40px;
  background-color: ${getBackground};
  color: ${getHeadline};
`;
