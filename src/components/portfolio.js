import { Container } from "./styles/_portfolio.js";
import { ClientCard } from "./portfolio.card.js";
import { Title } from "./styles/_portfolio.title.js";
import makingSite from "../images/create-website.svg";

const data = [
  {
    companyName: "GovOS",
    images: ["https://miro.medium.com/max/1400/1*X2-foj0ZnTxiU2Br37TZAA.jpeg"],
    blurb:
      "Worked on government projects that served millions daily. Lead the UI team in development of new features.",
  },
  {
    companyName: "Wells Fargo",
    images: ["https://miro.medium.com/max/1400/1*X2-foj0ZnTxiU2Br37TZAA.jpeg"],
    blurb:
      "I worked on the health section. Some more stuff. Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!",
  },
  {
    companyName: "Another one",
    images: ["https://miro.medium.com/max/1400/1*X2-foj0ZnTxiU2Br37TZAA.jpeg"],
    blurb:
      "Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!",
  },
  {
    companyName: "number 4",
    images: ["https://miro.medium.com/max/1400/1*X2-foj0ZnTxiU2Br37TZAA.jpeg"],
    blurb:
      "Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!",
  },
];

export const Portfolio = () => {
  return (
    <Container>
      <Title>Projects</Title>
      <img src={makingSite} alt="hire me to make websites!" />
      <div>
        {data.map((d, i) => (
          <ClientCard key={`client-card:${i}`} {...d} />
        ))}
      </div>
    </Container>
  );
};
