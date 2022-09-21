/** @jsxImportSource @emotion/react */

import Icon, { types, links } from "../components/icon";
import styles from "./splash.styles";

const Splash = () => (
  <div css={styles.container}>
    <div>
      <h1>Rae Ralston</h1>
      <h2>Creative Engineer</h2>
      <p>portfolio under construction</p>
    </div>
    <div css={styles.iconContainer}>
      <Icon className="icon" type={types.github} href={links.github} />
      <Icon className="icon" type={types.linkedIn} href={links.linkedIn} />
      <Icon className="icon" type={types.email} href={links.email} />
    </div>
  </div>
);

export default Splash;
