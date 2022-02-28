import { Container } from "./styles/_about.js";
import { Clients } from "./styles/_about.card.clients.js";
import { Expertise } from "./styles/_about.card.expertise.js";
import { Services } from "./styles/_about.card.services.js";
import { Title } from "./styles/_about.title.js";
import { Pill } from "./styles/_about.card.expertise.pill.js";

const Skill = ({ title, level }) => {
  return (
    <div className="skill-level">
      {title}
      <Pill isOn={level >= 1} />
      <Pill isOn={level >= 2} />
      <Pill isOn={level >= 3} />
      <Pill isOn={level >= 4} />
      <Pill isOn={level >= 5} />
    </div>
  );
};

export const About = () => {
  return (
    <Container>
      <Clients>
        <Title>Past Clients</Title>
        <div style={{ minHeight: "200px" }}></div>
      </Clients>
      <Services>
        <Title>Services</Title>
        <p>comprehensive front end design</p>
      </Services>
      <Expertise>
        <Title>Expertise</Title>
        <Skill title="React" level={5} />
        <Skill title="CSS" level={5} />
        <Skill title="API Design" level={4} />
        <Skill title="Project Management" level={4} />
      </Expertise>
    </Container>
  );
};
