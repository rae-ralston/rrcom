import ArtCard from "./components/card-art";
import CodeCard from "./components/card-code";
import Container from "./components/styles/landing";

const App = () => (
  <Container className="cloak">
    <ArtCard />
    <CodeCard />
  </Container>
);

export default App;
