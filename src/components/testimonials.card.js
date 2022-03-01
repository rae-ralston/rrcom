import { Container } from "./styles/_testimonials.card";

export const ReqCard = ({ name, req, img, position, company }) => {
  return (
    <Container>
      <img src={img} alt={`recommendation by ${name}`} />
      <p>{req}</p>
      <h4>
        - {name}, {position} @ {company}
      </h4>
    </Container>
  );
};
