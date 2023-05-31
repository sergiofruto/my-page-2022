import { useState } from "react";
import styles from "./ColorGrid.module.css";

const ColorGrid = () => {
  const [active, setActive] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8

  const setPrevious = () => {
    active === 0 ? setActive(8) : setActive(active - 1);
  };

  const setNext = () => {
    active === 8 ? setActive(0) : setActive(active + 1);
  };

  const palettes = [
    [
      {
        number: 1,
        color: "#F4F4F4",
        name: "base",
        text: "japanese colours [for UI] 02 / MOUSE Palette Nuevo.Tokyo / 2022",
      },
      { number: 2, color: "#F4F4F4", name: "base", text: "" },
      { number: 3, color: "#F4F4F4", name: "base", text: "" },
      {
        number: 4,
        color: "#D4DCDA",
        name: "light-grey-cloud",
        text: "薄雲鼠 light GREY cloud",
      },
      { number: 5, color: "#D4DCDA", name: "", text: "" },
      { number: 6, color: "#D4DCDA", name: "", text: "" },
      {
        number: 7,
        color: "#6C848D",
        name: "indigo-grey",
        text: "藍鼠 indigo grey",
      },
      { number: 8, color: "#D4DCDA", name: "white", text: "" },
      { number: 9, color: "#D4DCDA", name: "black", text: "" },
    ],
    [
      {
        number: 1,
        color: "#F4F4F4",
        name: "base",
        text: "japanese colours [for UI] 02 / MOUSE Palette Nuevo.Tokyo / 2022",
      },
      { number: 2, color: "#F4F4F4", name: "base", text: "" },
      {
        number: 3,
        color: "#DCDDDD",
        name: "white-gray",
        text: "白鼠 Shiro nezu dcdddd white grey",
      },
      {
        number: 4,
        color: "#D4DCDA",
        name: "light-grey-cloud",
        text: "薄雲鼠 light GREY cloud",
      },
      { number: 5, color: "#D4DCDA", name: "", text: "" },
      { number: 6, color: "#D4DCDA", name: "", text: "" },
      {
        number: 7,
        color: "#6C848D",
        name: "indigo-grey",
        text: "藍鼠 indigo grey",
      },
      { number: 8, color: "#D4DCDA", name: "white", text: "" },
      { number: 9, color: "#D4DCDA", name: "black", text: "" },
    ],
  ];

  return (
    <div className={styles["grid-container"]}>
      <h1 className={styles["grid-title"]}>Color Palette Grid</h1>
      <div className={styles["grid"]}>
        {palettes[active].map((color) => (
          <div
            key={color.number}
            className={styles["grid-item"]}
            style={{ backgroundColor: color.color }}
          >
            <p className={styles["grid-item-text"]}>{color.text}</p>
          </div>
        ))}
      </div>
      <div className={styles["grid-controls"]}>
        <p className={styles["grid-controls-text"]}>CHANGE THE COLOR PALETTE</p>
        <button className="prev" onClick={setPrevious}>{`<`}</button>
        <button className="next" onClick={setNext}>{`>`}</button>
      </div>
    </div>
  );
};

export default ColorGrid;
