import React from "react";
import { useState } from "react";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
const App = () => {
  const [clicked, updClick] = useState(true);
  const toggleComponentVisibility = () => {
    updClick(false);
  };
  return (
    <>
      {clicked ? (
        <Loginpage toggleVisibility={toggleComponentVisibility} />
      ) : (
        <Homepage />
      )}
    </>
  );
};
export default App;
