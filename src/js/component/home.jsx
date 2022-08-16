import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("");

  return (
    <div className="semaforo">
      <div
        onClick={() => setColor("red")}
        className={"light red " + (color === "red" ? "glowred" : "")}
      ></div>

      <div
        onClick={() => setColor("yellow")}
        className={"light yellow " + (color === "yellow" ? "glowyellow" : "")}></div>
      <div
        onClick={() => setColor("green")}
        className={"light green " + (color === "green" ? "glowgreen" : "")}
      ></div>
    </div>
  );
};

export default Home;
