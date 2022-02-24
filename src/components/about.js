import { Container } from "./styles/_about.js";
import { Fun } from "./styles/_about.fun.js";

export const About = () => {
  return (
    <Container>
      <Fun>
        <h3>About</h3>
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
      <section>
        <h1>services</h1>
      </section>
      <section>
        <h1>tech</h1>
      </section>
    </Container>
  );
};
