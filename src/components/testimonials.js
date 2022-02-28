import { useState } from "react";
import { Container } from "./styles/_testimonials.js";
import { ReqCard } from "./testimonials.card";
import ethan from "../images/ethan.jpeg";
import evan from "../images/evan.jpeg";
import james from "../images/james.jpeg";
import tim from "../images/tim.jpeg";

const recommendations = [
  {
    name: "Ethan Stark",
    img: ethan,
    req: "Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!",
  },
  {
    name: "Evan Sherwood",
    img: evan,
    req: "Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!",
  },
  {
    name: "James Stewart Jr",
    img: james,
    req: "Working with Rachel was a delight every single time. Her strong communication and leadership experience makes her a great team member, but where she shines is in developing in Node. I’ve learned a lot from Rachel when creating reliable production-ready software. Her ability to quickly solve problems as they arise either within teams or software is a unique and powerful asset for any engineering team she chooses to join.",
  },
  {
    name: "Tim McMacken",
    img: tim,
    req: "I’ve worked under Rachel on several projects and she’s a great manager. She always empowered me to be better at my job and helped me to expand my horizons.",
  },
];

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
      <button onClick={toPrev}>prev</button>
      <button onClick={toNext}>next</button>
    </Container>
  );
};
