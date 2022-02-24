import { Container } from "./styles/_contact.js";
import { SocialLinks } from "./social-links";

export const Contact = () => {
  return (
    <Container>
      <h1>Get In Touch</h1>
      Interested in discussing a project? Rae is available via email at
      hello@rachelralston.com or by phone at 333-333-3333.
      <SocialLinks />
    </Container>
  );
};
