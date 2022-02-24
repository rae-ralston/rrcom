import styled from "@emotion/styled";

export const Fun = styled.section`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;

  & .emoji-portrait {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: white;
    font-size: 70px;
    padding: 10px;
    height: 100px;
    width: 100px;
    line-height: 100px;
    margin: auto 0;
  }

  & ul {
    padding-inline-start: 25px;
    list-style-type: circle;
  }

  & li {
    padding: 5px;
    text-align: left;
  }

  & h3 {
    font-family: "Courier New", monospace;
    padding-top: 10px;
    grid-column: 1/-1;
    margin: 0;
    padding: 0;
  }
`;
