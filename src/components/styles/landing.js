import styled from "@emotion/styled";
import { types } from "../landing";

const isArt = (type) => type === types.art;
const isCode = (type) => type === types.code;

const toggleStyles =
  ({ artRule, codeRule }) =>
  (props) => {
    if (isArt(props.type)) return artRule;
    if (isCode(props.type)) return codeRule;
    return "";
  };

const transitionGradient = toggleStyles({
  artRule: `background: linear-gradient(to right, white, black);`,
  codeRule: `background: linear-gradient(to right, black, white);`,
});

export default styled.article`
  display: grid;
  grid-template-columns: 1fr 20px 1fr;
  height: 100vh;

  .transition {
    width: 20px;
    background-color: black;
    ${transitionGradient}

    &:hover {
      animation: a 2s linear infinite;
      background: linear-gradient(
          rgba(255, 0, 0, 1) 0%,
          rgba(255, 154, 0, 1) 10%,
          rgba(208, 222, 33, 1) 20%,
          rgba(79, 220, 74, 1) 30%,
          rgba(63, 218, 216, 1) 40%,
          rgba(47, 201, 226, 1) 50%,
          rgba(28, 127, 238, 1) 60%,
          rgba(95, 21, 242, 1) 70%,
          rgba(186, 12, 248, 1) 80%,
          rgba(251, 7, 217, 1) 90%,
          rgba(255, 0, 0, 1) 100%
        )
        0 0/100% 200%;

      @keyframes a {
        to {
          background-position: 0 -200%;
        }
      }
    }
  }
`;
