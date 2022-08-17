import React, { useState } from "react";

const Purple = ({ mostar }) => {
  const [newColor, setNewColor] = useState("");

  return (
    <div>
      {mostar ? (
        <div
          onClick={() => setNewColor("purple")}
          className={
            "light purple " + (newColor === "purple" ? "glowpurple" : "")
          }
        ></div>
      ) : null}
    </div>
  );
};

export default Purple;
