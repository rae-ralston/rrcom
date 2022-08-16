import { Link } from "react-router-dom";
import { viewStyles } from "../hooks/view-styles";
import CardContainer from "./styles/landing.card";

const Card = ({ children, type }) => (
  <CardContainer type={type} {...viewStyles[type]}>
    <Link to={type}>{children}</Link>
  </CardContainer>
);

export default Card;
