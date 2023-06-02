/** @jsxImportSource @emotion/react */
import styles from "./landing.styles";
import Popup from "./popup";
import useTimeDateDisplay from "./use-time-date-display";

const bull1 =
  "I'm baby literally truffaut vibecession tilde man braid, tumeric kombucha keffiyeh hammock. Street art umami raw denim listicle, meditation snackwave bespoke. DIY heirloom narwhal.";

const bull2 =
  "Typewriter twee taiyaki blog celiac. YOLO lo-fi tilde shabby chic gluten-free. ";

const Landing = () => {
  const { time, date } = useTimeDateDisplay();

  return (
    <div css={styles.layout}>
      <div css={styles.layoutHeader}>
        <div css={styles.name}>Rae Ralston™</div>
        <div />
        <div css={styles.time}>{time}</div>
        <div css={styles.date}>{date}</div>
      </div>
      <div css={styles.body}>
        <Popup
          offsetX={100}
          offsetY={100}
          width={400}
          height={200}
          bodyText={bull1}
        />
        <Popup
          offsetX={250}
          offsetY={250}
          width={300}
          height={150}
          bodyText={bull2}
        />
      </div>
    </div>
  );
};

export default Landing;
