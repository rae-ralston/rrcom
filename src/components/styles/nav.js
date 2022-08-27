import styled from "@emotion/styled";
import { isEmpty } from "ramda";
import { Link } from "react-router-dom";
import { viewStyles } from "../../context/view-styles";
import { types } from "../constants";

export default styled.nav`
  border-bottom: 1px solid black;
  padding: 8px 5px 5px 5px;
  height: 50px;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${viewStyles?.default?.headlineColor}

  font-family: "Babe Sans";
  font-weight: normal;
  font-style: normal;

  & > * {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    font-family: ${styles?.headlineFont};
    background-color: ${styles?.backgroundColor};
    color: ${styles?.headlineColor};
    ${props.type === types.art ? "padding: 6px 14px 3px 14px;" : ""}
  `;
};

export const StyledLink = styled(Link)`
  padding: 10px 14px 3px 14px;
  font-size: 25px;
  min-height: 26px;
  ${styleByType}
`;
