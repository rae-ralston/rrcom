import { Container } from "./styles/_contact";
import { SocialLinks } from "./contact.social-links";
import analyzing from "../images/project-analysis.svg";
import rae from "../images/rae_ralston.jpeg";
import { mailTo } from "./constants";

export const Contact = () => (
  <Container>
    <h2>Get In Touch</h2>
    <img src={rae}></img>
    <p>some stuff about rae</p>
    <div>
      <p>
        Interested in discussing a project? Rae is available via email at{" "}
        <a href={mailTo}>hello@raeralston.com</a>. They're open to these sorts
        of projects...
      </p>
      <SocialLinks />
    </div>
    <img src={analyzing} alt="Let's work together" />
    <div className="footer">(c) 2022 Rae Ralston. 💛</div>
  </Container>
);
