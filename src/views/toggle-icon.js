/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { retroWhite } from "../components/constants";

const style = css`
  padding: 10px;
  background-color: ${retroWhite};
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleIcon = ({ src, onClick }) => (
  <div css={style} onClick={onClick}>
    <img src={src} alt="toggle-icon" />
  </div>
);

export default ToggleIcon;
