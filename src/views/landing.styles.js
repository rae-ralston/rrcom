import { css } from "@emotion/react";
import { retroWhite, retroBlack } from "../components/constants";

const styles = {
  layout: css`
    width: 100vw;
    height: 100vh;
    background-color: ${retroBlack};
  `,
  layoutHeader: css`
    display: grid;
    grid-template-columns: 130px 1fr 100px 200px;
    background-color: ${retroWhite};

    & * {
      border: 3px solid ${retroBlack};
      border-left: 0px;
    }

    & :first-child {
      border-right: 3px solid ${retroBlack};
    }
  `,
};

export default styles;
