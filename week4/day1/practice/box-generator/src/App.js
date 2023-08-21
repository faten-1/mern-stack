import { useState } from 'react';
import './App.css';
import ColorInput from './components/colorInput';
import ColorBox from './components/boxDisplay';


function App() {
  const [boxArray,setBoxArray] =useState([])
  
  return (
    <div className="App">
        <ColorInput 
          boxArray={boxArray}
          setBoxArray = {setBoxArray}
          
        />
        <ColorBox 
          boxArray={boxArray}
    
        />
    </div>
  );
}

export default App;
