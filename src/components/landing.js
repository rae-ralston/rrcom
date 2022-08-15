import Container from "./styles/landing";
import CardContainer from "./styles/landing.card";
import { types } from "./constants";

const Landing = () => (
  <Container>
    <CardContainer type={types.art}>Art</CardContainer>
    <CardContainer type={types.code}>Code</CardContainer>
  </Container>
);

export default Landing;
