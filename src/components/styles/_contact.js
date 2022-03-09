import styled from "@emotion/styled";
import { fontFamily } from "../constants";

export const Container = styled.article`
  grid-area: contact;
  background-color: #fffd;
  color: #101c2a;
  display: grid;
  grid-template-columns: 1fr 25%;
  gap: 15px;
  max-width: 1250px;
  margin: 0 auto;

  & .footer {
    grid-column: 1/-1;
    padding-top: 30px;
  }

  & p {
    font-size: 2em;
  }

  & h2 {
    font-size: 50px;
    font-family: ${fontFamily}
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
