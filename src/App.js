import { Routes, Route } from "react-router-dom";
import Art from "./components/art";
import Landing from "./components/landing";
import Navigation from "./components/nav";
import Code from "./components/page.code";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="art" element={<Art />} />
        <Route path="code" element={<Code />} />
      </Routes>
    </>
  );
};

export default App;
