import { css } from "@emotion/react";
import { retroWhite, retroBlack, border } from "../components/constants";

const styles = {
  layout: css`
    width: 100vw;
    height: 100vh;
    background-color: ${retroBlack};
    display: grid;
    grid-template-areas: "header" "main";
    grid-template-rows: min-content 1fr;
    grid-template-columns: 1fr;
  `,
  layoutHeader: css`
    background-color: ${retroWhite};
    display: grid;
    grid-area: header;
    grid-template-areas: "name . time date";
    grid-template-columns: 200px 1fr 150px 250px;

    & * {
      border: ${border};
      border-left: 0px;
      padding: 10px;
    }

    & :first-child {
      border-right: ${border};
    }
  `,
  name: css`
    template-area: name;
  `,
  time: css`
    template-area: time;
  `,
  date: css`
    template-area: date;
  `,
  body: css`
    template-area: main;
  `,
};

export default styles;
