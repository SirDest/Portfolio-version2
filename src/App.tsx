import React, { useState } from "react";
import Landing from "./components/Landing/Landing";
import Main from "./components/Main/Main";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      // style={{
      //   backgroundColor: darkMode ? "black" : "white",
      //   color: darkMode ? "black" : "white",
      // }}
      className='flex flex-col'
    >
      <Landing darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
