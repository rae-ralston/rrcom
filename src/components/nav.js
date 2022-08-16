import { useContext } from "react";
import ViewContext from "../context.view";
import { types } from "./constants";
import Nav from "./styles/nav";

const Navigation = () => {
  const view = useContext(ViewContext);

  return (
    <Nav>
      Rae Ralston
      {view.type === types.landing && <div>hello</div>}
    </Nav>
  );
};

export default Navigation;
