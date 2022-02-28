import { Container } from "./styles/_testimonials.card";

export const ReqCard = ({ name, req, img }) => {
  // refactor out emoji wrapper
  // change out emojis for linked in photos?
  return (
    <Container>
      {/* <div>{img}</div> */}
      <img src={img} alt={`recommendation by ${name}`} />
      <p>{req}</p>
      <h4>{name}</h4>
    </Container>
  );
};
