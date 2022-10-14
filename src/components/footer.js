/** @jsxImportSource @emotion/react */

import Icon, { footerIcons } from "../components/icon";
import { mailTo } from "./constants";
import { styles } from "./footer.styles";

/*
TODO 🍋
- sticky footer
- contact info
- copy write symbol
*/

const makeIcons = (data) => <Icon key={data.type} className="icon" {...data} />;

const Footer = () => (
  <footer css={styles.container}>
    <p>Rae Ralston (c), 2022</p>
    <a href={mailTo}>raeralston@pm.me</a>

    <div css={styles.iconContainer}>{footerIcons.map(makeIcons)}</div>
  </footer>
);

export default Footer;
