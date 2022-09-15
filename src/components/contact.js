/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const styles = {
  container: css`
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: white;
  `,
  inner: css`
    border-radius: 20px;
    position: relative;
    font-size: 100px;
    padding: 55px;
    margin: 30px;
    height: 100%;
    background-color: salmon;

    button {
      font-size: 20px;
    }
  `,
};

const Contact = ({ hide, close }) => {
  if (hide) return null;

  return (
    <div css={styles.container}>
      <div css={styles.inner}>
        info@raeralston.dev <button onClick={close}>close</button>
      </div>
    </div>
  );
};

export default Contact;
