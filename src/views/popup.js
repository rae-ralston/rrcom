/** @jsxImportSource @emotion/react */
import useDraggable from "../components/use-draggable";
import styles from "./popup.style";

const closeSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="currentColor"
    class="bi bi-x"
    viewBox="0 0 16 16"
  >
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
  </svg>
);

const Popup = ({ offsetX, offsetY, width, height, bodyText }) => {
  const { initializeDrag, elemRef } = useDraggable(offsetX, offsetY);

  return (
    <div
      css={styles.window(offsetX, offsetX, width, height)}
      onMouseDown={initializeDrag}
      ref={elemRef}
    >
      <div css={styles.header}>
        <button alt="close">{closeSVG}</button>
      </div>
      <div css={styles.body}>{bodyText}</div>
    </div>
  );
};

export default Popup;
