import { css } from "@emotion/react";

export const resumeStyles = {
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

export const cardStyles = {
  cardContainer: css`
    border: 1px grey solid;
    margin: 10px;
    display: flex;
    flex-direction: row;
    max-width: 900px;
  `,
  img: css`
    height: 100%;
    margin: 10px;
    width: 200px;
    min-width: 200px;
  `,
  content: css`
    background-color: yellow;
    padding: 10px;

    & > * {
      padding: 0;
      margin: 0;
      width: 100%;
    }

    & h3 {
      font-size: 30px;
    }
  `,
};
