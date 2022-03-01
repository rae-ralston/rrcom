import styled from "@emotion/styled";

export const Card = styled.div`
  border-radius: 4px;
  padding: 10px;
  width: 250px;
  height: 250px;
  position: relative;
  text-align: center;
  color: white;
  background-color: #f6ae38;
  margin: 10px;

  & h3 {
    font-family: "Courier New", monospace;
  }

  & img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;
