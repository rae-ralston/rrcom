import sketch from "../sketch";
import Art from "./landing.card.art";
import Code from "./landing.card.code";
import Container from "./styles/landing";
import { ReactP5Wrapper } from "react-p5-wrapper";

const Landing = () => (
  <>
    <ReactP5Wrapper sketch={sketch} />
    <Container>
      <Art />
      <Code />
    </Container>
  </>
);

export default Landing;
