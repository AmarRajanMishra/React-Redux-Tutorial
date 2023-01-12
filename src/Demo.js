import React from 'react'
import { useSelector } from 'react-redux'

function Demo() {
    const count = useSelector((state)=> state.counter.value)
  return (
    <div>
        Demo
        <h1>{count}</h1>
    </div>
  )
}

export default Demo;