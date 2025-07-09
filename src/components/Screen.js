import React from 'react';
import '../stylesheet/Screen.css';
const Screen = ({
  input
}) => {
  console.log(window.globalCount++);
  return <div className='input'>
    {input}
  </div>;
};
export default Screen;