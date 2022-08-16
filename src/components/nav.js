import { useContext } from "react";
import { Link } from "react-router-dom";
import ViewContext from "../hooks/view-context";
import { types } from "./constants";
import Nav from "./styles/nav";

const Navigation = () => {
  const view = useContext(ViewContext);

  return (
    <Nav>
      <Link to="/">Rae Ralston</Link>

      {view.type !== types.landing && (
        <div>
          <Link to="/art">Art</Link>
          <Link to="/code">Code</Link>
        </div>
      )}
    </Nav>
  );
};

export default Navigation;
