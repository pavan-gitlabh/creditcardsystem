import React, { useState } from "react";
import CreditcardList from "./CreditcardList";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App light"}>
      <Header />
      <CreditcardList />
    </div>
  );
}

export default App;
