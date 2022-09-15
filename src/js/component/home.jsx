import React, { useState, useEffect } from "react";
import Purple from "./purple.jsx";

const Home = () => {
  const [color, setColor] = useState("");

  const [show, setShow] = useState(false);

  const [auto, setAuto] = useState(false);

  const [intervalId, setIntervalID] = useState(0);
  const [intervalId2, setIntervalID2] = useState(0);
  const [intervalId3, setIntervalID3] = useState(0);

  const [newColor, setNewColor] = useState("");

  useEffect(() => {
    if (auto) {
      let newIntervalId = setInterval(() => {
        setColor("red");
      }, 1000);
      setIntervalID(newIntervalId);
    }
  }, [auto]);


  useEffect(() => {
    if (auto) {
      let newIntervalId = setInterval(() => {
        setColor("yellow");
      }, 2000);
      setIntervalID2(newIntervalId);
    }
  }, [auto]);


  useEffect(() => {
    if (auto) {
      let newIntervalId = setInterval(() => {
        setColor("green");
      }, 3000);
      setIntervalID3(newIntervalId);
    }
  }, [auto]);






 

  const stopInterval = () => {
    clearInterval(intervalId);
    clearInterval(intervalId2);
    clearInterval(intervalId3);

    setColor("");
  };
  


  return (
    <div>
      <div className="trafic">
        <div className="semaforo">
          <div
            onClick={() => setColor("red")}
            className={"light red " + (color === "red" ? "glowred" : "")}
          ></div>

          <div
            onClick={() => setColor("yellow")}
            className={
              "light yellow " + (color === "yellow" ? "glowyellow" : "")
            }
          ></div>
          <div
            onClick={() => setColor("green")}
            className={"light green " + (color === "green" ? "glowgreen" : "")}
          ></div>
          <Purple mostar={show} setNewColor={setNewColor} newColor={newColor} />
        </div>

        <div className="palo fixed-top"></div>
      </div>
      <div className="butons">
        <button
          type="button"
          className="btn btn-success "
          onClick={() => setShow(true)}
        >
          Show Purple
        </button>
        <button
          type="button"
          className="btn btn-danger "
          onClick={() => setShow(false)}
        >
          Hide Purple
        </button>
      </div>
      <div className="automatico">
        <button
          type="button"
          className="btn btn-success "
          onClick={() => setAuto(true)}
        >
          Automatico
        </button>
        <button
          type="button"
          className="btn btn-danger "
          onClick={() => stopInterval()}
        >
          stop
        </button>
      </div>
    </div>
  );
};

export default Home;
