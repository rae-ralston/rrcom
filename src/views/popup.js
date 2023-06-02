/** @jsxImportSource @emotion/react */
import useDraggable from "../components/use-draggable";
import styles from "./popup.style";

const Popup = ({ offsetX, offsetY, width, height }) => {
  const { initializeDrag, elemRef } = useDraggable(offsetX, offsetY);

  return (
    <div
      css={styles.window(offsetX, offsetX, width, height)}
      onMouseDown={initializeDrag}
      ref={elemRef}
    >
      <div css={styles.header}>
        <span>existential_err.exe</span>
        <div>
          <button alt="minimize">_</button>
          <button alt="close">x</button>
        </div>
      </div>
      <div>body</div>
      <button>run</button>
    </div>
  );
};

export default Popup;
