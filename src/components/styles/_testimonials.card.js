import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "pic req"
    "pic name";
  gap: 15px;
  padding: 5px;
  margin: 0 auto;
  grid-template-rows: min-content 1fr;
  width: 800px;
  height: 250px;

  & img {
    grid-area: pic;
    display: flex;
    border-radius: 50%;
    background-color: white;
    font-size: 70px;
    padding: 10px;
    height: 150px;
    width: 150px;
    line-height: 100px;
    margin: auto 0;
  }

  & h4 {
    grid-area: name;
    padding: 0;
    margin: 0;
    font-weight: 400;
    text-align: right;
  }

  & p {
    grid-area: req;
    text-align: left;
    line-height: 1.5;
    font-size: 1.2em;
    align-self: center;
  }
`;
