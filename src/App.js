import Art from "./components/card-art";
import Code from "./components/card-code";
import Navigation from "./components/nav";
import Container from "./components/styles/landing";
import ViewContext from "./hooks/view-context";
import useViewContext from "./hooks/use-view-context";

const App = () => {
  const viewing = useViewContext();

  return (
    <ViewContext.Provider value={viewing}>
      <Navigation />
      <Container>
        <Art />
        <Code />
      </Container>
    </ViewContext.Provider>
  );
};

export default App;
