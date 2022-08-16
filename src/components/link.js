import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import ViewContext from "../hooks/view-context";

const Link = ({ to, page, text }) => {
  const view = useContext(ViewContext);

  return (
    <RouterLink to={to} onClick={() => view.setView(page)}>
      {text}
    </RouterLink>
  );
};

export default Link;
