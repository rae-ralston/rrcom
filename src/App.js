import { Routes, Route } from "react-router-dom";
import useViewContext from "./context/use-view-context";
import ViewContext from "./context/view-context";
import Art from "./components/art";
import Landing from "./components/landing";
import Navigation from "./components/nav";
import Code from "./components/page.code";

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
