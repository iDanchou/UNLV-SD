import './App.css';
import React, { useState } from 'react';
import ColorBlock from './Components/colorBlock';
import ColorForm from './Components/colorForm';

function App() {
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])

  const addColor = (newcColor) => {
    setColors([...colors, newcColor])
  }

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
  })
  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
