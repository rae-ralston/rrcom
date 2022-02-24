import styled from "@emotion/styled";

export const NavContainer = styled.nav`
  grid-area: nav;
  width: 300px;
  border-right: 2px solid blue;
  height: 100vh;

  display: grid;
  grid-template-rows: min-content min-content 1fr min-content;
  grid-template-areas:
    "logo"
    "nameTitle"
    "links"
    "footer";

  justify-items: center;
  align-items; center;

  display: none;
`;
