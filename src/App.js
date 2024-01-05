import { useState } from "react";
import "./App.css";
import SlideComp from "./components/SlideComp";
import Title from "./components/Title";

function App() {
  const [slideValue, setSlideValue] = useState(0);
  let bgColor;
  let textColor;
  const slideValueChange = (e) => {
    setSlideValue(e.target.value);
  };

  if (slideValue < 25) {
    bgColor = "red";
    textColor = "lightred";
  } else if (slideValue >= 25 && slideValue <= 50) {
    bgColor = "blue";
    textColor = "lightblue";
  } else if (slideValue > 51 && slideValue <= 75) {
    bgColor = "green";
    textColor = "lightgreen";
  } else {
    bgColor = "orange";
    textColor = "black";
  }

  return (
    <div className="App">
      <Title titleName={"Slide to grow"} titleClass={"title"} />
      <SlideComp setValue={slideValue} handleInput={slideValueChange} />
      <div
        style={{
          width: `${slideValue * 2}px`,
          height: `${slideValue * 2}px`,
          background: !bgColor ? "lightgray" : bgColor,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: !textColor ? "white" : textColor,
        }}>
        {slideValue}
      </div>
    </div>
  );
}

export default App;
