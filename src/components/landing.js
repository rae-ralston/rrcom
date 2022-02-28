import { Container } from "./styles/_landing.js";
import { Image } from "./styles/_landing.splash-img.js";
import splash from "../images/splash.jpg";

export const Landing = () => {
  return (
    <Container>
      <Image src={splash} alt="Rachel Ralston, software engineer" />

      <div>
        <h1>👋 Hi, I'm Rae.</h1>
        <p>
          I'm a senior software engineer with a background in ux design and
          visual art.
        </p>
      </div>
    </Container>
  );
};
