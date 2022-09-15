import Card from "../sketches/card";
import data from "./art.data";
import CardContainer from "./art.styles";

const Art = () => (
  <>
    <h1>Art</h1>
    <CardContainer>
      {data.map((dailyArt) => (
        <Card key={dailyArt.id} width={500} height={500} {...dailyArt} />
      ))}
    </CardContainer>
  </>
);

export default Art;
