import { IconContext } from "react-icons";
import { Container } from "./styles/_philosophy.card";
import { iconConfig } from "./constants";

export const Card = ({ Icon, title, summary }) => (
  <Container>
    <IconContext.Provider value={iconConfig({ size: "60px" })}>
      <Icon className="service-icon" />
    </IconContext.Provider>
    <h4>{title}</h4>
    <p>{summary}</p>
  </Container>
);
