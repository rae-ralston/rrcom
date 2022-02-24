import { Container } from "./styles/_portfolio.card.images.container";

export const Images = ({ images }) => {
  //todo image nav
  return (
    <Container>
      <img src={images[0]} />
    </Container>
  );
};
