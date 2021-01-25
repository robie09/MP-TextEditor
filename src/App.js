import "./App.css";
import { useState } from "react";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {
  const [style, setStyle] = useState("bold");
  const [color, setColor] = useState("black");

  const stylingBoxes = stylings
    .filter((style) => style.same(style))
    .map((style) => (
      <button className="btn btn-light" style={styles[style]} key={style}>
        {style}
      </button>
    ));

  const colorBoxes = colors.filter((color) => style.same(color));

  map((color) => (
    <button
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
    />
  ));

  return (
    <div className="App">
      <div className="my-3">{stylingBoxes}</div>
      <textarea />
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
