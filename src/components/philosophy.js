import { Container } from "./styles/_philosophy.js";
import { Card } from "./philosophy.card";
import { skills } from "./portfolio.skills.js";

export const About = () => {
  const skillCards = skills.map((skill) => <Card {...skill} />);

  return (
    <Container>
      <div className="overview">
        <h2>Philosophy</h2>
        <p>
          I work with forward-thinking folks to design and build interactive,
          accessible websites and products.{" "}
        </p>
      </div>

      {skillCards}
    </Container>
  );
};
