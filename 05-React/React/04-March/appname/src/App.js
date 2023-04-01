
import { useState, createContext } from "react";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
export const myContext = createContext

function App() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const myName = (e) => {
    setName(e.target.value);
  }
  const myColor = (e) => {
    setColor(e.target.value);
  }


  return (
    <>
      <Navbar />

      <form>
        <input type={'text'}
          placeholder="Enter the Username"
          value={name}
          onChange={myName}
        />
        <input type={"text"}
          placdeholder="Enter the color"
          value={"color"}
          onChange={myColor}
        />
      </form>
      <HeroSection />

    </>
  );
}

export default App;
