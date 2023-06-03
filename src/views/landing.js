/** @jsxImportSource @emotion/react */
import styles from "./landing.styles";
import Popup from "./popup";
import ToggleIcon from "./toggle-icon";
import useTimeDateDisplay from "./use-time-date-display";
import Visualizer from "./visualizer";
import useSections from "./use-sections";

const bull1 = "Resume";

const bull2 =
  "CONTACT: Typewriter twee taiyaki blog celiac. YOLO lo-fi tilde shabby chic gluten-free. ";

const Landing = () => {
  //animation frame? make this more efficient?
  const { time, date } = useTimeDateDisplay();
  const { music, resume, contact } = useSections();

  return (
    <div css={styles.layout}>
      <div css={styles.layoutHeader}>
        <div css={styles.name}>Rae Ralston™</div>
        <div />
        <div css={styles.time}>{time}</div>
        <div css={styles.date}>{date}</div>
      </div>
      <div css={styles.body}>
        <nav css={styles.navToggle}>
          <ToggleIcon src={resume.icon} onClick={resume.toggle} />
          <ToggleIcon src={contact.icon} onClick={contact.toggle} />
          <ToggleIcon src={music.icon} onClick={music.toggle} />
        </nav>

        <Popup offsetX={100} offsetY={100} {...resume}>
          <p>{bull1}</p>
        </Popup>

        <Popup offsetX={250} offsetY={250} {...contact}>
          <p>{bull2}</p>
        </Popup>

        <Popup offsetX={40} offsetY={240} {...music}>
          <Visualizer />
        </Popup>
      </div>
    </div>
  );
};

export default Landing;
