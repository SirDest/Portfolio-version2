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
      className={`flex flex-col ${darkMode ? "bg-[#050C0F]" : "bg-white"} ${
        darkMode ? "text-[#ECE6D5]" : "text-black"
      }`}
    >
      <Landing darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
