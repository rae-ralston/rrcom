import { css } from "@emotion/react";
import { border, radius, retroWhite } from "../components/constants";

const styles = {
  window: (x, y, width = 400, height = 300) => css`
    background-color: ${retroWhite};
    position: absolute;
    display: grid;
    grid-template-rows: 40px 1fr 40px;
    justify-items: center;
    top: ${y}px;
    left: ${x}px;
    border: ${border};
    border-radius: ${radius};
    box-shadow: 5px 10px;
    width: ${width}px;
    height: ${height}px;

    button {
      padding: 5px 7px;
      color: grey;
      border: ${border};
      border-radius: ${radius};
      justify-self: end;
    }
  `,
  header: css`
    background-color: grey;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${border};
    width: 100%;
    border-radius: ${radius} ${radius} 0 0;
  `,
  close: css`
    background-color: red;
    border: ${border};
    border-radius: 100px;
    width: 20px;
    height: 20px;
  `,
};

export default styles;
