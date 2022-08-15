import { pathOr } from "ramda";

export const fontFamily = `"Courier Prime", "Courier New", monospace;`;

export const colors = {
  brightBlue: "#3b81e1",
  white: "#fff",
  black: "#000",
  lightGray: "#aaa",
  default: {
    white: "grey",
    black: "salmon",
  },
  art: {
    white: "#F9EFDE",
    black: "#161616",
    accent: "",
    headlineFont: ``,
  },
  code: {
    white: "yellow",
    black: "purple",
    accent: "",
    headlineFont: ``,
  },
};

export const getColor = (type, color) =>
  pathOr(colors.default[color], [type, color], colors);

export const getBlack = (props) => getColor(props.type, "black");
export const getWhite = (props) => getColor(props.type, "white");
