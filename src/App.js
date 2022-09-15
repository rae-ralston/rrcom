import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Navigation from "./components/nav";
import Landing from "./views/landing";
import What from "./views/what";
import Who from "./views/who";
import Work from "./views/work";

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
