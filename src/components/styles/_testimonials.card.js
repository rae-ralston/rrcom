import styled from "@emotion/styled";

export const Container = styled.article`
  display: grid;
  grid-template-areas:
    "emoji name"
    "emoji req";
  gap: 15px;
  padding: 5px;
  grid-template-rows: min-content 1fr;
  width: 700px;

  & img {
    grid-area: emoji;
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

  & h4 {
    grid-area: name;
    padding: 0;
    margin: 0;
  }

  & p {
    grid-area: req;
  }
`;
