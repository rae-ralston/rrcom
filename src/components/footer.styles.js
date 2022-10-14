import { css } from "@emotion/react";
import { computerNavHeight } from "./constants";

export const styles = {
  container: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${computerNavHeight}px;
  `,
  iconContainer: css`
    .icon {
      padding: 0 5px;
      transition: all 0.5s;
      color: black;
    }

    .icon:hover {
      color: #e18a07;
      transform: scale(1.1);
    }
  `,
};
