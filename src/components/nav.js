import { Container } from "./styles/_nav.js";
import { Title } from "./styles/_portfolio.title.js";

export const Nav = () => (
  <Container>
    <Title>Rae Ralston</Title>

    <div>
      <button href="#">About</button>
      <button href="#">Services</button>
      <button href="#">Portfolio</button>
      <button href="#">Contact</button>
    </div>

    <p>let's work together</p>
  </Container>
);
