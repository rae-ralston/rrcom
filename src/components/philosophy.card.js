import { IconContext } from "react-icons";
import { Container } from "./styles/_philosophy.card";

export const Card = ({ Icon, title, summary }) => {
  const iconConfig = {
    color: "#3B81E1",
    size: "60px",
    style: {
      verticalAlign: "middle",
      alignSelf: "center",
      margin: "0 auto",
    },
  };

  return (
    <Container>
      <IconContext.Provider value={iconConfig}>
        <Icon className="service-icon" />
      </IconContext.Provider>
      <h4>{title}</h4>
      <p>{summary}</p>
    </Container>
  );
};
