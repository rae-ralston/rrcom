import { mailTo } from "./constants";
import { Container } from "./styles/_nav";
import { Title } from "./styles/_portfolio.title";

export const Nav = () => (
  <Container>
    <Title>Rae Ralston</Title>

    <a href={mailTo}>Hire Me</a>
  </Container>
);
