import { css } from "@emotion/react";
import { border, radius, retroWhite, black } from "../components/constants";

const styles = {
  window: (x, y, width = 400, height = 300) => css`
    font-family: "SilkscreenRegular";
    background-color: ${retroWhite};
    padding: 8px;
    position: absolute;
    display: grid;
    grid-template-areas:
      "header close"
      "body   body";
    grid-template-rows: min-content 1fr;
    grid-template-columns: 1fr min-content;
    text-align: left;
    top: ${y}px;
    left: ${x}px;
    border: ${border};
    border-radius: ${radius};
    box-shadow: 10px 10px;
    width: ${width}px;
  `,
  header: css`
    background-color: ${retroWhite};
    border-radius: ${radius} ${radius} 0 0;
    grid-area: header;

    button {
      color: ${black};
      border: 0;
      justify-self: end;
      background-color: transparent;
      height: 40px;
    }
  `,
  body: css`
    background-color: ${black};
    color: ${retroWhite};
    padding: 8px;
    border-radius: ${radius};
    grid-area: body;
  `,
  close: css`
    background-color: red;
    border: ${border};
    border-radius: 100px;
    width: 20px;
    height: 20px;
    grid-area: close;
  `,
};

export default styles;
