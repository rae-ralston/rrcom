import { About } from "./components/philosophy";
import { Contact } from "./components/contact";
import { Landing } from "./components/landing";
import { Nav } from "./components/nav";
import { Portfolio } from "./components/portfolio";
import { Testimonials } from "./components/testimonials";

function App() {
  return (
    <>
      <Nav />
      <Landing />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
