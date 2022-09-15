import { Link } from "react-router-dom";
import Nav, { Container } from "./nav.styles";

const Navigation = () => {
  return (
    <Nav>
      <Link to={"/"}>Rae</Link>

      <Container>
        <Link to={`/`}>Intro</Link>
        <Link to={`/who`}>Who</Link>
        <Link to={`/what`}>What</Link>
        <Link to={`/work`}>Work</Link>
      </Container>
      <button onClick={() => {}}>contact</button>
    </Nav>
  );
};

export default Navigation;
