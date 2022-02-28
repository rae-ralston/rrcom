import { Container } from "./styles/_testimonials.card";

export const ReqCard = ({ name, req, emoji }) => {
  // refactor out emoji wrapper
  // change out emojis for linked in photos?
  return (
    <Container>
      <div>{emoji}</div>
      <p>{req}</p>
      <h4>{name}</h4>
    </Container>
  );
};
