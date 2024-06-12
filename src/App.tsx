import { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState<boolean>(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <button onClick={darkModeHandler}>
        {dark && "Normal"}
        {!dark && "Dark"}
      </button>
      <h1 className="text-sm font-bold dark:text-3xl">Hello world</h1>
    </>
  );
}

export default App;
