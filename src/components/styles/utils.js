import { path } from "ramda";

const artHeadline = `  
font-family: "Cloak";
font-weight: normal;
font-style: normal;`;

const codeHeadline = `
  font-family: 'South Pacific';
  font-weight: normal;
  font-style: normal;
`;

export const colors = {
  art: {
    background: "#F4E7D7",
    mainText: "#1D1D1B",
    mainTextFont: "",
    headLineText: "#E55825",
    headlineFont: artHeadline,
  },
  code: {
    background: "#FEBF12",
    mainText: "#020202",
    mainTextFont: "",
    headLineText: "#020202",
    headlineFont: codeHeadline,
  },
};

export const get = (type, color) => path([type, color], colors);

export const getBackgroundColor = (props) => get(props.type, "background");
export const getHeadlineColor = (props) => get(props.type, "headLineText");
export const getHeadlineColorFont = (props) => get(props.type, "headlineFont");
