import styled from "@emotion/styled";
import { viewStyles } from "../../hooks/view-styles";
import { Link } from "react-router-dom";
import { isEmpty } from "ramda";
import { types } from "../constants";

export default styled.nav`
  border-bottom: 1px solid black;
  padding: 8px 5px 5px 5px;
  display: flex;
  flex-direction: row;

  font-family: "Babe Sans";
  font-weight: normal;
  font-style: normal;

  & > * {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  padding: 3px;
  margin: 0 20px;
`;

const styleByType = (props) => {
  const styles = viewStyles[props.type] || {};

  return isEmpty(styles)
    ? ""
    : `
    border: 1px solid black;
    ${props.type === types.art ? "border-right: 0;" : ""}
    ${props.type === types.code ? "border-left: 0;" : ""}
    border-radius: ${props.type === types.art ? "6px 0 0 6px" : "0 6px 6px 0"};
    background-color: ${styles.background};
    color: ${styles.headLineText};
  `;
};

export const StyledLink = styled(Link)`
  padding: 5px 8px;
  ${styleByType}
`;
