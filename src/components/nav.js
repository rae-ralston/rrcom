import { Link } from "react-router-dom";
import Nav, { Container } from "./nav.styles";

const Navigation = ({ hideContact, sketchesReady }) => (
  <Nav>
    <Link to={"/"}>Rae</Link>

    {sketchesReady && (
      <Container>
        <Link to={`/`}>Intro</Link>
        <Link to={`/sketches`}>Sketches</Link>
      </Container>
    )}
    <button onClick={hideContact}>contact</button>
  </Nav>
);

export default Navigation;
