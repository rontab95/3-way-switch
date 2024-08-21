import React from "react";

const Switch = (props) => (
  <div className="switch-plate">
    <div className="screw" />
    <div className={`switch ${props.isOn ? 'on' : 'off'}`} onClick={props.toggle}>
      <div className="switch-handle" />
    </div>
    <div className="screw" />
    <div className="switch-label">{props.switchNumber}</div>
  </div>
);

export default Switch;
