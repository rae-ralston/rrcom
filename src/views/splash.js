/** @jsxImportSource @emotion/react */
import { mailTo } from "../components/constants";
import styles from "./splash.styles";

const Splash = () => (
  <div css={styles.container}>
    <div>
      <h1>Rae Ralston</h1>
      <h2>Creative Engineer</h2>
      <a href={mailTo()}>raeralston@pm.me</a>
    </div>
  </div>
);

export default Splash;
