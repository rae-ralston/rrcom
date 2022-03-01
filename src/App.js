import { About } from "./components/philosophy.js";
import { Contact } from "./components/contact.js";
import { Landing } from "./components/landing.js";
import { Nav } from "./components/nav.js";
import { Portfolio } from "./components/portfolio.js";
import { Testimonials } from "./components/testimonials.js";

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
