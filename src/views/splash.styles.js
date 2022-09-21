import { css } from "@emotion/react";

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
      margin-bottom: 0;
      margin-top: 100px;
    }

    h2 {
      margin-top: 0;
    }
  `,
  iconContainer: css`
    margin: 20px 30px 100px 30px;

    .icon {
      padding: 0 20px;
      transition: all 0.5s;
      color: black;
    }

    .icon:hover {
      color: #e18a07;
      transform: scale(1.1);
    }
  `,
};

export default styles;
