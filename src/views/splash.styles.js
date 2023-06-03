import { css } from "@emotion/react";
import { magenta } from "../components/constants";

const styles = {
  container: css`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h1 {
      font-size: 80px;
      margin: 0;
    }

    h2 {
      margin-top: 0;
    }

    a {
      color: ${magenta};

      &:hover {
        text-decoration: underline;
      }
    }
  `,
};

export default styles;
