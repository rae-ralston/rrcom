import { NavContainer } from "./styles/_nav.js";
import { Link } from "./styles/_nav.link.js";
import { NameTitle } from "./styles/_nav.name-title.js";
import { Links } from "./styles/_nav.links.js";
import { Footer } from "./styles/_nav.footer.js";

export const Nav = () => {
  return (
    <NavContainer>
      <NameTitle>
        <h1>Rachel Ralston</h1>
        <h2>Software Engineering</h2>
      </NameTitle>

      <Links>
        <Link href="#">About</Link>
        <Link href="#">Services</Link>
        <Link href="#">Portfolio</Link>
        <Link href="#">Contact</Link>
      </Links>

      <Footer>logo icon footer</Footer>
    </NavContainer>
  );
};
