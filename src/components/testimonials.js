import { useState } from "react";
import { Container } from "./styles/_testimonials";
import { ReqCard } from "./testimonials.card";
import ethan from "../images/ethan.jpeg";
import evan from "../images/evan.jpeg";
import james from "../images/james.jpeg";
import tim from "../images/tim.jpeg";

const recommendations = [
  {
    name: "Ethan Stark",
    position: "Senior Full Stack Engineer",
    company: "GovOs",
    img: ethan,
    req: "Can you please send me the design specs again? in an ideal world. I like it, but can the snow look a little warmer i think this should be fairly easy so if you just want to have a look and just do what you think. I trust you I have an awesome idea for a startup,",
  },
  {
    name: "Evan Sherwood",
    position: "Engineering Project Lead",
    company: "GovOs",
    img: evan,
    req: "Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!",
  },
  {
    name: "James Stewart Jr",
    position: "Software Engineer",
    company: "Lowe's",
    img: james,
    req: "Working with Rae was a delight every single time. Their strong communication and leadership experience makes them a great team member, but where they shine is in developing in Node. I’ve learned a lot from Rae and their ability to quickly solve problems as they arise either within teams or software is a unique and powerful asset for any engineering team.",
  },
  {
    name: "Tim McMacken",
    position: "Software Engineer",
    company: "Accel AI",
    img: tim,
    req: "I’ve worked under Rae on several projects and they're a great manager. They always empowered me to be better at my job and helped me to expand my horizons.",
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
      <div className="button-container">
        <button onClick={toPrev}>prev</button>
        <button onClick={toNext}>next</button>
      </div>
    </Container>
  );
};
