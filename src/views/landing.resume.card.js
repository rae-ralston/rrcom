/** @jsxImportSource @emotion/react */

import { cardStyles as styles } from "./landing.resume.styles";
/*
TODO 💃
- background image
    - background three.js
- blur behind job cards
 */

const JobCard = ({ company, position, dates, blurb, logo }) => (
  <div css={styles.cardContainer}>
    <img css={styles.img} src={logo} alt={`logo for ${company}`} />
    <div css={styles.content}>
      <h3>{company}</h3>
      <h4>{position}</h4>
      <p>{dates}</p>
      <p>{blurb}</p>
    </div>
  </div>
);

export default JobCard;
