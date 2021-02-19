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
  let [textStyle, setStyle] = useState({});
  const [textColor, setColor] = useState("black");

  const changeStyle = (style) => {
    const textStyleArray = Object.values(textStyle);
    const found = textStyleArray.find((elemnt) => {
      console.log("elemnt: ", elemnt);
      return elemnt.includes(style);
    });
    if (found === undefined) {
      setStyle((textStyle) => (textStyle = { ...textStyle, ...styles[style] }));
    } else {
      const obj = styles[style];
      for (const key in obj) {
        if (style === obj[key]) {
          delete textStyle[key];
        }
      }
      setStyle((textStyle) => (textStyle = { ...textStyle }));
    }
  };

  const stylingBoxes = stylings.map((style) => (
    <button
      className="btn btn-light"
      style={styles[style]}
      key={style}
      onClick={() => changeStyle(style)}
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
      <div className="my-3">{stylingBoxes}</div>
      <textarea style={{ color: textColor, ...textStyle }} />
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
