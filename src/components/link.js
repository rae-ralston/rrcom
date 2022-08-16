import { useContext } from "react";
import ViewContext from "../hooks/view-context";
import { StyledLink } from "./styles/nav";

const Link = ({ to, page, text }) => {
  const view = useContext(ViewContext);

  return (
    <StyledLink to={to} onClick={() => view.setView(page)} type={page}>
      {text}
    </StyledLink>
  );
};

export default Link;
