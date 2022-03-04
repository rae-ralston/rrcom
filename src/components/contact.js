import { Container } from "./styles/_contact";
import { SocialLinks } from "./social-links";
import analyzing from "../images/project-analysis.svg";

export const Contact = () => (
  <Container>
    <h1>Get In Touch</h1>
    <div>
      Interested in discussing a project? Rae is available via email at
      hello@rachelralston.com or by phone at 333-333-3333.
      <SocialLinks />
    </div>
    <img src={analyzing} alt="Let's work together" />
  </Container>
);
