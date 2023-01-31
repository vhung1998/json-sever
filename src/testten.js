import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
const [name, setName] = useState()

  return (
   
  <div style={{padding:32 }}>
    <input 
     value = {name}
     onChange={a => { setName(a.target.value)}}/>
   <button onClick = {() => {setName('nguyễn văn BBB') }}>bb</button>
  </div>
  )
}

export default App;
