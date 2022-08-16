import React, { useState } from "react";

const Home = () => {
  const [color, Setcolor] = useState("");

  return (
    <div className="semaforo">
      <div
        onClick={() => Setcolor("red")}
        className={"light red " + (color === "red" ? "glowred" : "")}
      ></div>

      <div
        onClick={() => Setcolor("yellow")}
        className={"light yellow" + (color === "yellow" ? "glowyellow" : "")}></div>
      <div
        onClick={() => Setcolor("green")}
        className={"light green" + (color === "green" ? "glowgreen" : "")}
      ></div>
    </div>
  );
};

export default Home;
