import styled from "@emotion/styled";
import * as util from "./utils";

export default styled.div`
  padding: 40px;
  background-color: ${util.getBackgroundColor};
  color: ${util.getHeadlineColor};
  cursor: pointer;

  h1 {
    font-size: 50px;
    ${util.getHeadlineColorFont}
  }

  &:hover {
    h1 {
      transform: scale(1.5, 1.5);
      transition: all 0.3s;
    }
  }
`;
