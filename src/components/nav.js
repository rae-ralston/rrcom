import { useContext } from "react";
import ViewContext from "../hooks/view-context";
import { types } from "./constants";
import Link from "./link";
import Nav from "./styles/nav";

const Navigation = () => {
  const view = useContext(ViewContext);

  return (
    <Nav>
      <Link to={"/"} page={types.landing} text="Rae Ralston" />

      {view.type !== types.landing && (
        <div>
          <Link to={"/art"} page={types.art} text="Art" />
          <Link to={"/code"} page={types.code} text="Code" />
        </div>
      )}
    </Nav>
  );
};

export default Navigation;
