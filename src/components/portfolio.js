import { Container } from "./styles/_portfolio.js";
import { ClientCard } from "./portfolio.card.js";
import { Title } from "./styles/_portfolio.title.js";

const data = [
  {
    company: "GovOS",
    images: ["https://miro.medium.com/max/1400/1*X2-foj0ZnTxiU2Br37TZAA.jpeg"],
    blurb:
      "Worked on government projects that served millions daily. Lead the UI team in development of new features.",
  },
  {
    company: "Wells Fargo",
    images: ["https://miro.medium.com/max/1400/1*X2-foj0ZnTxiU2Br37TZAA.jpeg"],
    blurb: "I worked on the health section. Some more stuff.",
  },
];

export const Portfolio = () => {
  return (
    <Container>
      <Title>Projects</Title>
      {data.map((d, i) => (
        <ClientCard key={`client-card:${i}`} {...d} />
      ))}
    </Container>
  );
};
