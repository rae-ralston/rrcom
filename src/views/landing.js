/** @jsxImportSource @emotion/react */

import styles from "./landing.styles";
import Popup from "./popup";

const Landing = () => (
  <div css={styles.layout}>
    <div css={styles.layoutHeader}>
      <div>Rae Ralston™</div>
      <div />
      <div>22:21:00</div>
      <div>Tuesday October 18th, 2032</div>
    </div>
    <Popup offsetX={100} offsetY={100} width={400} height={200} />
    <Popup offsetX={250} offsetY={250} width={300} height={150} />
  </div>
);

export default Landing;
