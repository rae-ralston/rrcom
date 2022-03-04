import { useState } from "react";
import { Container } from "./styles/_testimonials";
import { ReqCard } from "./testimonials.card";
import { recommendations } from "./testimonials.data.js";

export const Testimonials = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toNext = () => {
    if (selectedIndex === recommendations.length - 1) return;
    setSelectedIndex(selectedIndex + 1);
  };

  const toPrev = () => {
    if (selectedIndex === 0) return;
    setSelectedIndex(selectedIndex - 1);
  };

  return (
    <Container>
      <h3>Testimonials</h3>
      <ReqCard {...recommendations[selectedIndex]} />
      <div className="button-container">
        <button onClick={toPrev}>prev</button>
        <button onClick={toNext}>next</button>
      </div>
    </Container>
  );
};
