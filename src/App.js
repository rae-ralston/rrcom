import { Layout } from "./components/styles/_layout.js";
import { About } from "./components/about.js";
import { Contact } from "./components/contact.js";
import { Landing } from "./components/landing.js";
import { Nav } from "./components/nav.js";
import { Portfolio } from "./components/portfolio.js";
import { Testimonials } from "./components/testimonials.js";

function App() {
  return (
    <Layout className="App">
      <Nav />
      <Landing />

      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export default App;
