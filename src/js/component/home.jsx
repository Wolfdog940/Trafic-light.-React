import React, { useState } from "react";
import Purple from "./purple.jsx";

const Home = () => {
  const [color, setColor] = useState("");
 
  const [show,setShow]= useState(false);
  

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
          className={"light yellow " + (color === "yellow" ? "glowyellow" : "")}
        ></div>
        <div
          onClick={() => setColor("green")}
          className={"light green " + (color === "green" ? "glowgreen" : "")}
        ></div>
        <Purple mostar={show}/>
		
    
    
    </div>
     

      <div className="palo fixed-top"></div>
        
      
    </div>
     <button type="button" className="btn btn-success " onClick={()=>setShow(true)}>Show Purple</button>
     <button type="button" className="btn btn-danger " onClick={()=>setShow(false)}>Hide Purple</button>
     </div>
  );
};

export default Home;
