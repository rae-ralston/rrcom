import { Card } from "./styles/_portfolio.card";

export const ClientCard = ({ companyName, images, blurb }) => (
  <Card>
    <img src={images[0]} alt={`rae ralston portfolio for ${companyName}`} />
    <h3>{companyName}</h3>
  </Card>
);
