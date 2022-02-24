import "./App.css";
import { Nav } from "./components/nav.js";
import { About } from "./components/about.js";
import { Portfolio } from "./components/portfolio.js";
import { Contact } from "./components/contact.js";
import { Landing } from "./components/landing.js";
import { Layout } from "./components/styles/_layout.js";

function App() {
  return (
    <Layout className="App">
      <Nav />
      <Landing />
      <About />
      <Portfolio />
      <Contact />
    </Layout>
  );
}

export default App;
