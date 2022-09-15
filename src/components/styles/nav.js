import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default styled.nav`
  border-bottom: 1px solid black;
  padding: 8px 5px 5px 5px;
  height: 50px;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

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

export const StyledLink = styled(Link)`
  padding: 10px 14px 3px 14px;
  font-size: 25px;
  min-height: 26px;
`;
