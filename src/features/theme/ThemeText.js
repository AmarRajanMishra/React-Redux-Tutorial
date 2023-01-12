import React, { useState } from 'react'

function ThemeText() {
    const [color, setColor] = useState('black')
  return (
    <div>
        <h1 style={{color : color}}>ThemeText</h1>
        <input type="text" onChange={(e)=> setColor(e.target.value)} />
        <button>Change Text Color</button>
        <h1>{color}</h1>

    </div>
  )
}

export default ThemeText;