import "./App.css";
import Display from "./components/Display/Display";
import ButtonsContainer from "./components/ButtonsContainer/ButtonsContainer";
import Buttons from "./components/ButtonsContainer/Buttons";
import { useState } from "react";

function App() {
  const [textDisplay, setTextDisplay] = useState("");

  const handleClickButton = (item) => {
    if (item === "C") {
      setTextDisplay("");
    } else if (item === "=") {
      let result = eval(textDisplay);
      setTextDisplay(result);
    } else {
      let result = textDisplay + item;
      setTextDisplay(result);
    }
  };

  return (
    <div className="container">
      <h1 style={{textAlign:"center"}}>Calculator</h1>
      <Display textView={textDisplay}></Display>
      <ButtonsContainer>
        <Buttons onClickButton={handleClickButton}></Buttons>
      </ButtonsContainer>
    </div>
  );
}

export default App;
