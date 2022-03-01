import styled from "@emotion/styled";

export const Container = styled.div`
  grid-area: testimonials;
  background: #3b81e1;
  height: 400px;
  padding: 40px;

  & .button-container {
    padding: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;

    & button {
      padding: 10px 20px;
      background-color: #fff;
      border-radius: 4px;
      border: 1px solid #101c2a;
    }
  }
`;
