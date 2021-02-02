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
  //create object
  const [style, setStyle] = useState({ Style: fontStyle, stylex: "italic" });
  const [color, setColor] = useState("black");

  var stylelist = [];
  const handelChange = (tStyle) => {
    stylelist.filter((style) => style === null);
    styles.map((style) => tStyle === style);
    stylelist.push(setStyle[styles[tStyle]]);
    setStyle(stylelist);
  };

  const stylingBoxes = stylings.map((style) => (
    <button
      className="btn btn-light"
      style={styles[style]}
      key={style}
      onClick={() => handelChange(style)}
    >
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
      onClick={() => setColor(color)}
    />
  ));

  return (
    <div className="App">
      <div className="my-3" style={style}>
        {stylingBoxes}
      </div>
      <textarea value="text" style={{ color: color, ...styles }} />
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
