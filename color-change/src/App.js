import React, { useState } from 'react'
import './App.css';

function App() {
  const[text,settext]=useState("")
  const[fonts,setfontcolor]=useState()
  function red(){
      setfontcolor('red')
  }
  function blue(){
    setfontcolor('blue')
  }
  function green(){
    setfontcolor('green')
  }
  return (
    <div className="App">
       <input type="text" onChange={e=>settext(e.target.value)}/>
      <button onClick={red}>red</button>
      <button onClick={blue}>blue</button>
      <button onClick={green}>green</button>
      <p style={{color:fonts}}>{text}</p>
    </div>
  );
}

export default App;
