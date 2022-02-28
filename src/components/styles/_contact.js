import styled from "@emotion/styled";

export const Container = styled.article`
  grid-area: contact;
  background-color: #101c2a;
  color: #fff;
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 15px;
  padding: 15px;

  & h1 {
    font-size: 50px;
    font-family: "Courier New", monospace;
    grid-column: 1/-1;
  }

  & .about-card {
    display: grid;
    grid-template-columns: min-content 1fr;
    align-items: center;
  }

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
`;
