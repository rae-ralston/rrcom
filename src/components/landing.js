import { useState } from "react";
import Container from "./styles/landing";
import CardContainer from "./styles/landing.card";

export const types = { none: "none", art: "art", code: "code" };

const Landing = () => {
  const [hovered, setHovered] = useState(types.art);

  const props = (type) => ({
    type: hovered,
    hovering: hovered === type,
    onMouseEnter: () => setHovered(type),
    onMouseLeave: () => setHovered("none"),
  });

  return (
    <Container type={hovered}>
      <CardContainer {...props(types.art)}>Art</CardContainer>
      <div className="transition" />
      <CardContainer {...props(types.code)}>Code</CardContainer>
    </Container>
  );
};

export default Landing;
