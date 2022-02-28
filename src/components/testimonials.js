import { Container } from "./styles/_testimonials.js";
import { ReqCard } from "./testimonials.card";

const reqs = [
  {
    name: "Ethan Stark",
    emoji: "🐺",
    req: "Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!",
  },
  {
    name: "Evan Sherwood",
    emoji: "🎩",
    req: "Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!",
  },
  {
    name: "Someone Else",
    emoji: "🌈",
    req: "Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!",
  },
];

export const Testimonials = () => {
  return (
    <Container>
      <h3>Testimonials</h3>
      {reqs.map((req, i) => (
        <ReqCard key={`req-card-${i}`} {...req} />
      ))}
    </Container>
  );
};
