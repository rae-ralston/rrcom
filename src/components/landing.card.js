import { viewStyles } from "../hooks/view-styles";
import CardContainer from "./styles/landing.card";

const Card = ({ children, type }) => (
  <CardContainer type={type} {...viewStyles[type]}>
    {children}
  </CardContainer>
);

export default Card;
