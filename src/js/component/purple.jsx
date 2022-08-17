import React, { useState } from "react";

const Purple = ({ mostar,setNewColor,newColor }) => {


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
