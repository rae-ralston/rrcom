import { Container } from "./styles/_contact.js";
import { SocialLinks } from "./social-links";
import { Fun } from "./styles/_about.card.fun.js";
import { Title } from "./styles/_about.title.js";

export const Contact = () => {
  return (
    <Container>
      <h1>Get In Touch</h1>
      <Fun>
        <Title>About</Title>
        <div className="emoji-portrait">🧑🏻</div>
        <div>
          <ul>
            <li>
              based in the Bay Area but spends a great majority of their time
              traveling internationally.
            </li>
            <li>loves adventure sports and cooking.</li>
            <li>will definitely pet your dog.</li>
          </ul>
        </div>
      </Fun>
      <div>
        Interested in discussing a project? Rae is available via email at
        hello@rachelralston.com or by phone at 333-333-3333.
        <SocialLinks />
      </div>
    </Container>
  );
};
