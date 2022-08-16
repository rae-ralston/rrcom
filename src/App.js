import Art from "./components/landing.card.art";
import Code from "./components/landing.card.code";
import Navigation from "./components/nav";
import Container from "./components/styles/landing";
import ViewContext from "./hooks/view-context";
import useViewContext from "./hooks/use-view-context";

const App = () => {
  const view = useViewContext();

  return (
    <ViewContext.Provider value={view}>
      <Navigation />
      <Container>
        <Art />
        <Code />
      </Container>
    </ViewContext.Provider>
  );
};

export default App;
