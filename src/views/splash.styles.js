import { css } from "@emotion/react";
import { magenta } from "../components/constants";

const styles = {
  container: css`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-areas: "name" "title" "contact";
    grid-template-rows: 1fr min-content 1fr;
    align-items: center;

    h1 {
      font-size: 80px;
      margin: 0;
      align-self: end;
    }

    h2 {
      margin-top: 0;
    }

    a {
      color: ${magenta};
      align-self: start;

      &:hover {
        text-decoration: underline;
      }
    }
  `,
};

export default styles;
