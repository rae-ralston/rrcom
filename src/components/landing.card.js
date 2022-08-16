import { useContext } from "react";
import { Link } from "react-router-dom";
import ViewContext from "../hooks/view-context";
import { viewStyles } from "../hooks/view-styles";
import CardContainer from "./styles/landing.card";

const Card = ({ children, type }) => {
  const view = useContext(ViewContext);

  return (
    <CardContainer type={type} {...viewStyles[type]}>
      <Link to={type} onClick={() => view.setView(type)}>
        {children}
      </Link>
    </CardContainer>
  );
};

export default Card;
