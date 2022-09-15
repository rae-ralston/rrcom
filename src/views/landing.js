/** @jsxImportSource @emotion/react */

import Section from "../components/section";
import styles from "./landing.styles";

const Landing = () => (
  <div>
    <Section css={styles.splash}>splash</Section>
    <Section css={styles.about}>
      <span>section 2</span>
      Rae is an award winning creative engineer specializing in exciting and
      meaningful experiences.
    </Section>
  </div>
);

export default Landing;
