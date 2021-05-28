
import './App.css';
import React, { useState } from 'react'
function App() {
  const[text,settext]=useState(true)
 
  return (
    <div className="App">
      {text && <p>Loading</p>}
      <button onClick={()=>settext(!text)}>click</button>
      
    </div>
  );
}

export default App;
