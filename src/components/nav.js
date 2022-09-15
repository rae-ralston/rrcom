import { Link } from "react-router-dom";
import Nav, { Container } from "./styles/nav";

const Navigation = () => {
  return (
    <Nav>
      <Link to={"/"}>Rae</Link>

      <Container>
        <Link to={`/who`}>Who</Link>
        <Link to={`/what`}>What</Link>
        <Link to={`/work`}>Work</Link>
      </Container>
    </Nav>
  );
};

export default Navigation;
