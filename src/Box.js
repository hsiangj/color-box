import React from "react";
import './Box.css';

const Box = ({id, width, height, color, remove}) => {
  return (
    <div className = "Box">
      <div 
        style = {{
          backgroundColor: color,
          height: `${height}px`,
          width: `${width}px`
        }}>
      
      </div>
      <button className="Box-button" onClick={()=>remove(id)}>x</button>
    </div>
  )
}

export default Box;