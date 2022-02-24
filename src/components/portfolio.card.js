import { Card } from "./styles/_portfolio.card.js";
import { Images } from "./portfolio.card.images.js";
import { Company } from "./styles/_portfolio.card.company.js";
import { Blurb } from "./styles/_portfolio.card.blurb.js";

export const ClientCard = ({ company, images, blurb }) => {
  return (
    <Card>
      <Images images={images} />
      <Company>{company}</Company>
      <Blurb>{blurb}</Blurb>
    </Card>
  );
};
