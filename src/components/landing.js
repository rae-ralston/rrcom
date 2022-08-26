import Art from "./landing.card.art";
import Code from "./landing.card.code";
import Container from "./styles/landing";
import Card from "../sketches/card";
import sketch220825 from "../sketches/220825";

const Landing = () => (
  <>
    <Container>
      <Art />
      <Code />
    </Container>
    <Card toDraw={sketch220825} />
  </>
);

export default Landing;
