import { not } from "ramda";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Navigation from "./components/nav";
import Landing from "./views/landing";
import Splash from "./views/splash";
import What from "./views/what";
import Who from "./views/who";
import Work from "./views/work";

const App = () => {
  const [hideContact, setHideContact] = useState(true);

  const toggleHideContact = () => {
    setHideContact(!hideContact);
  };

  const readyForThePublic = false;
  if (not(readyForThePublic)) return <Splash />;

  return (
    <>
      <Navigation hideContact={toggleHideContact} />
      <Contact hide={hideContact} close={toggleHideContact} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/who" element={<Who />} />
        <Route path="/what" element={<What />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
