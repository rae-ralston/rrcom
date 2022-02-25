import { Container } from "./styles/_about.js";
import { Fun } from "./styles/_about.card.fun.js";
import { Technology } from "./styles/_about.card.tech.js";
import { Services } from "./styles/_about.card.services.js";
import { Title } from "./styles/_about.title.js";

export const About = () => {
  return (
    <Container>
      <Fun>
        <Title>Past Clients</Title>
        <div style={{ minHeight: "200px" }}></div>
      </Fun>
      <Services>
        <Title>Services</Title>
      </Services>
      <Technology>
        <Title>Expertise</Title>
      </Technology>
    </Container>
  );
};
