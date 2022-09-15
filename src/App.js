import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing";
import Navigation from "./components/nav";
import Who from "./components/who";
import What from "./components/what";
import Work from "./components/work";
import Footer from "./components/footer";

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/who" element={<Who />} />
      <Route path="/what" element={<What />} />
      <Route path="/work" element={<Work />} />
    </Routes>
    <Footer />
  </>
);

export default App;
