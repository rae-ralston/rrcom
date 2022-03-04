import styled from "@emotion/styled";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  border-right: 2px solid blue;
  background-color: #fff;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  & h3 {
    padding: 0;
    padding-left: 10px;
    margin: 0;
  }

  & a {
    font-weight: 700;
    color: #101c2a;
    text-decoration: none;
    padding: 20px 40px;
    background-color: #ffd54e;
    border: 0;
    font-family: "Courier Prime", "Courier New", monospace;
    font-size: 25px;
    cursor: pointer;
  }
`;
