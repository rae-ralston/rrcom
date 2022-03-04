import { Container } from "./styles/_portfolio";
import { ClientCard } from "./portfolio.card";
import { Title } from "./styles/_portfolio.title";
import makingSite from "../images/create-website.svg";
import { data } from "./portfolio.data";

export const Portfolio = () => {
  return (
    <Container>
      <Title>Selected Projects</Title>
      <img src={makingSite} alt="hire me to make websites!" />
      <div className="card-container">
        {data.map((d, i) => (
          <ClientCard key={`client-card:${i}`} {...d} />
        ))}
      </div>
    </Container>
  );
};
