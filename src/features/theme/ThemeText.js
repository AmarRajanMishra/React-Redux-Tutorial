import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeTextTheme } from './themeSlice';

function ThemeText() {
    const [color, setColor] = useState('black')
    const colorName = useSelector((state)=> state.theme.value)

    const dispatch = useDispatch()
  return (
    <div>
        <h1 style={{color : colorName}}>ThemeText</h1>
        <input type="text" onChange={(e)=> setColor(e.target.value)} />
        <button onClick={()=>{dispatch(changeTextTheme(color))}}>Change Text Color</button>
        <h1>{color}</h1>

    </div>
  )
}

export default ThemeText;


// {
//   function addNum(num1, num2){
//     console.log(num1+num2)
//   }

//   var a = 20, b = 30
//   addNum(a, b)


//   const data = [2, 8, 1, 9]
//   // console.log(data)
//   data.forEach((value, index, array))

// }