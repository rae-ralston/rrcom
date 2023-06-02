import { not } from "ramda";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import Splash from "./views/splash";
import Art from "./views/art";
import Landing from "./views/landing";

const App = () => {
  const [hideContact, setHideContact] = useState(true);

  const toggleHideContact = () => setHideContact(!hideContact);

  const readyForThePublic = false;
  const sketchesReady = false;
  if (not(readyForThePublic)) return <Splash />;

  return (
    <>
      <Contact hide={hideContact} close={toggleHideContact} />
      <Routes>
        <Route path="/" element={<Landing />} />
        {sketchesReady && <Route path="/sketches" element={<Art />} />}
      </Routes>
    </>
  );
};

export default App;
