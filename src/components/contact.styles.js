import { css } from "@emotion/react";

const styles = {
  container: css`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    background-color: white;
  `,
  inner: css`
    border-radius: 20px;
    position: relative;
    font-size: 50px;
    height: 100%;
    background-color: salmon;

    p {
      padding: 0;
      margin: 0;
    }

    button {
      font-size: 20px;
    }
  `,
  close: css`
    position: absolute;
    right: 0;
    top: 0;
  `,
};

export default styles;
