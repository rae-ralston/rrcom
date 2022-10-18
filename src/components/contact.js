/** @jsxImportSource @emotion/react */

import { mailTo } from "./constants";
import styles from "./contact.styles";

/*
TODO 🐹
- animate transition
- freeze scroll
- style close button
- restyle modal
*/

const Contact = ({ hide, close }) => {
  if (hide) return null;

  return (
    <div css={styles.container}>
      <div css={styles.inner}>
        <button css={styles.close} onClick={close}>
          close
        </button>
        <p>Hi There,</p>
        <p>I am currently accepting clients so</p>
        <p>
          <a
            href="www.google.com"
            alt="get on the client list for rae ralston software engineering"
          >
            get on the list
          </a>
          {" or "}
        </p>
        <p>
          <a
            href={mailTo("🤔 I've got questions")}
            alt="email rae ralston creative engineering"
          >
            shoot me an email
          </a>{" "}
          if you've got any questions.
        </p>
      </div>
    </div>
  );
};

export default Contact;
