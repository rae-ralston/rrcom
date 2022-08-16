import { useState } from "react";
import { types } from "../components/constants";
import { viewStyles } from "./view-styles";

const ViewContext = () => {
  const [view, setView] = useState(types.art);

  return {
    type: view,
    setView,
    styles: viewStyles[view],
  };
};

export default ViewContext;
