import styled from "@emotion/styled";
import { computerNavHeight } from "./constants";

const Section = styled.div`
  height: calc(100vh - ${computerNavHeight}px);
  padding: 10px;
`;
export default Section;
