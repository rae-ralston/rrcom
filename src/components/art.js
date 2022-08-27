import Card from "../sketches/card";
import data from "./art.data";
import Page from "./page";
import CardContainer from "./styles/art.container";

const Art = () => (
  <Page>
    <h1>Art</h1>
    <CardContainer>
      {data.map((dailyArt) => (
        <Card key={dailyArt.title} width={500} height={500} {...dailyArt} />
      ))}
    </CardContainer>
  </Page>
);

export default Art;
