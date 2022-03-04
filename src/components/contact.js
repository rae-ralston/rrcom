import { Container } from "./styles/_contact";
import { SocialLinks } from "./contact.social-links";
import analyzing from "../images/project-analysis.svg";

export const Contact = () => (
  <Container>
    <h2>Get In Touch</h2>
    <div>
      <p>
        Interested in discussing a project? Rae is available via email at{" "}
        <a href="mailto:hello@raeralston.com">hello@raeralston.com</a> or by
        phone at 333-333-3333.
      </p>
      <SocialLinks />
    </div>
    <img src={analyzing} alt="Let's work together" />
    <div className="footer">(c) 2022 Rae Ralston. 💛</div>
  </Container>
);
