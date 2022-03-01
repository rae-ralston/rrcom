import { Card } from "./styles/_portfolio.card.js";

export const ClientCard = ({ companyName, images, blurb }) => (
  <Card>
    <img src={images} />
    <h3>{companyName}</h3>
  </Card>
);
