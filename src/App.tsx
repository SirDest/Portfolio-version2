import React, { useState } from "react";
import Landing from "./components/Landing/Landing";
import Banner from "./components/Banner";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [banner, setBanner] = useState(true);
  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "black" : "white",
      }}
      className='relative flex flex-col'
    >
      <Landing darkMode={darkMode} setDarkMode={setDarkMode} />
      {banner && <Banner setBanner={setBanner} banner={banner} />}
    </div>
  );
}

export default App;
