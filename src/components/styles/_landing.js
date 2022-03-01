import styled from "@emotion/styled";

export const Container = styled.article`
  grid-area: landing;
  background-color: #fff;
  color: #101c2a;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  max-width: 1250px;
  margin: 0 auto;

  & p {
    max-width: 525px;
    margin: 0 auto;
  }

  & img {
    max-width: 100%;
  }

  & .headline-wrapper {
    display: flex;
    align-items: center;
    gap: 25px;
    justify-content: center;
  }

  & .big-boy {
    font-family: "Courier New", monospace;
    font-size: 60px;
    margin-bottom: 10px;

    & .inline {
      display: inline;
    }
  }

  & p {
    font-size: 30px;
    margin-top: 0;
  }
`;
