import styled from "@emotion/styled";

export const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "nav landing"
    "nav about"
    "nav portfolio"
    "nav testimonials"
    "nav contact";
  grid-template-columns: min-content 1fr;

  & article {
    padding: 40px;
  }
`;
