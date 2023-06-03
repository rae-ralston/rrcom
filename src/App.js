import { not } from "ramda";
import { Routes, Route } from "react-router-dom";
import Splash from "./views/splash";
import Landing from "./views/landing";

const App = () => {
  const readyForThePublic = false;

  if (not(readyForThePublic)) return <Splash />;

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
};

export default App;
