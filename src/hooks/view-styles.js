import { types } from "../components/constants";

export const viewStyles = {
  [types.art]: {
    background: "#F4E7D7",
    mainText: "#1D1D1B",
    mainTextFont: "",
    headLineText: "#E55825",
    headlineFont: `
      font-family: 'South Pacific';
      font-weight: normal;
      font-style: normal;
    `,
    disabled: {},
  },
  [types.code]: {
    background: "#FEBF12",
    mainText: "#020202",
    mainTextFont: "",
    headLineText: "#020202",
    headlineFont: `  
      font-family: "Cloak";
      font-weight: normal;
      font-style: normal;
    `,
    disabled: {},
  },
  [types.landing]: {},
};
