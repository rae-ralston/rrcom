import { useContext } from "react";
import ViewContext from "../hooks/view-context";
import { types } from "./constants";
import Link from "./link";
import Nav, { Container } from "./styles/nav";

const Navigation = () => {
  const { type } = useContext(ViewContext);
  const { art, code } = types;

  return (
    <Nav>
      <Link to={"/"} page={types.landing} text="Rae Ralston" />

      {type !== types.landing && (
        <Container>
          <Link to={`/${art}`} page={art} text="Art" />
          <Link to={`/${code}`} page={code} text="Code" />
        </Container>
      )}
    </Nav>
  );
};

export default Navigation;
