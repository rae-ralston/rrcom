import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing";
import Navigation from "./components/nav";
import Art from "./components/page.art";
import Code from "./components/page.code";
import ViewContext from "./hooks/view-context";
import useViewContext from "./hooks/use-view-context";

const App = () => {
  const view = useViewContext();

  return (
    <ViewContext.Provider value={view}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="art" element={<Art />} />
        <Route path="code" element={<Code />} />
      </Routes>
    </ViewContext.Provider>
  );
};

export default App;
