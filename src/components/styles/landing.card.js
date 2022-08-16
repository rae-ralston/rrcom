import styled from "@emotion/styled";
import { getHeadline, getBackground } from "./utils";

export default styled.div`
  padding: 40px;
  background-color: ${getBackground};
  color: ${getHeadline};

  h1 {
    font-size: 50px;
  }
`;
