import { css } from "@emotion/react";
import { computerNavHeight } from "./constants";

const styles = {
  container: css`
    width: 100%;
    height: ${computerNavHeight}px;
    padding: 10px;
  `,
};

const Footer = () => <div css={styles.container}>Rae Ralston, 2022</div>;

export default Footer;
