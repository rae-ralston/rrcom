import styled from "@emotion/styled";

export const Card = styled.div`
  border-radius: 4px;
  padding: 10px;
  width: 300px;
  height: 100px;
  background-image: url(${(props) => props.image});

  position: relative;
  text-align: center;
  color: white;

  & h3 {
    grid-area: company;
    font-family: "Courier New", monospace;
  }

  & img {
    width: 100%;
    height: 100%;
  }
`;
