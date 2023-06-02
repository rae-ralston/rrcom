/** @jsxImportSource @emotion/react */
import styles from "./landing.styles";
import Popup from "./popup";
import useTimeDateDisplay from "./use-time-date-display";
import Visualizer from "./visualizer";

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
        <Popup offsetX={100} offsetY={100} width={400} height={200}>
          <p>{bull1}</p>
        </Popup>
        <Popup offsetX={250} offsetY={250} width={300} height={150}>
          <p>{bull2}</p>
        </Popup>
        <Popup offsetX={40} offsetY={240} width={300} height={100}>
          <Visualizer />
        </Popup>
      </div>
    </div>
  );
};

export default Landing;
