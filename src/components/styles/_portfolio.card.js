import styled from "@emotion/styled";

export const Card = styled.div`
  border-radius: 12px;
  padding: 10px;
  width: 250px;
  height: 250px;

  position: relative;
  text-align: center;
  color: white;
  background-color: #f6ae38;
  margin: 10px;

  & h3 {
    font-family: "Courier Prime", "Courier New", monospace;
  }

  & img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
    object-position: 50% 0%;
  }
`;
