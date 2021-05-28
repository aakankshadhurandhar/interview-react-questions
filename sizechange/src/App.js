import React, { useState } from 'react'
import './App.css';

function App() {
  const[text,settext]=useState("")
  const[fonts,setfontsize]=useState(12)
  function h1(){
    setfontsize(32)
  }
  function h2(){
    setfontsize(24)
  }
  function h3(){
    setfontsize(18.75)
  }
  return (
    <div className="App">
      <input type="text" onChange={e=>settext(e.target.value)}/>
      <button onClick={h1}>h1</button>
      <button onClick={h2}>h2</button>
      <button onClick={h3}>h3</button>
      <p style={{fontSize:fonts}}>{text}</p>
    </div>
  );
}

export default App;
