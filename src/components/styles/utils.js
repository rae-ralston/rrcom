import { path } from "ramda";

export const colors = {
  art: {
    background: "#F4E7D7",
    mainText: "#1D1D1B",
    mainTextFont: "",
    headLineText: "#E55825",
    headlineFont: ``,
  },
  code: {
    background: "#F5C8C3",
    mainText: "#020202",
    mainTextFont: "",
    headLineText: "#020202",
    headlineFont: ``,
  },
};

export const getColor = (type, color) => path([type, color], colors);

export const getBackground = (props) => getColor(props.type, "background");
export const getHeadline = (props) => getColor(props.type, "headLineText");
