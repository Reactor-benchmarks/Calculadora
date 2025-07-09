import React from "react";
import '../stylesheet/ButtonClear.css';
const ButtonClear = props => {
  console.log(window.globalCount++);
  return <div className="button-clear" onClick={props.handleClear}>
        {props.children}
    </div>;
};
export default ButtonClear;