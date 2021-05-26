import React, { useState } from 'react'
import './App.css';

function App() {
  const[text,settext]=useState("")
  const[fonts,setfontsize]=useState(18)
  function textin(){
    setfontsize(fonts+2)
  }
  function textsub(){
    setfontsize(fonts-2)
  }
  return (
    <div className="App">
      <input type="text"   value={text} onChange={e=>settext(e.target.value)}/>
      <button onClick={textin}>+</button>
      <button onClick={textsub}>-</button>
      <p style={{fontSize:fonts}}>{text}</p>
    </div>
  );
}

export default App;
