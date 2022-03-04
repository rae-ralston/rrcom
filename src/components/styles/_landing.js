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

  & .lightbulb {
    position: absolute;
    left: 225px;
    top: 50px;
    width: 115px;
  }

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
    font-family: "Courier Prime", "Courier New", monospace;
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

  .scaling-lightbulb {
    animation: scalingLightbulb 4s infinite;
    animation-timing-function: ease-in-out;
    transform-orgin: center;
  }

  @keyframes scalingLightbulb {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
`;
