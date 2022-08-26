import { types } from "../components/constants";

export const viewStyles = {
  default: { headlineColor: "#E55825" },
  [types.art]: {
    backgroundColor: "#F4E7D7",
    mainTextColor: "#1D1D1B",
    mainTextFont: "",
    headlineColor: "#E55825",
    headlineFont: "South Pacific",
    disabled: {},
  },
  [types.code]: {
    backgroundColor: "#FEBF12",
    mainTextColor: "#020202",
    mainTextFont: "",
    headlineColor: "#020202",
    headlineFont: "Cloak",
    disabled: {},
  },
  [types.landing]: {},
};
