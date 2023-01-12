
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice';

function Counter() {
    // const [state, setState] = useState(0)
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()

  return (
    <div>Counter
        <h1>{count}</h1>
        <button onClick={()=> {dispatch(increment())} }>Increment</button>
        <button onClick={()=> {dispatch(decrement())}}>Decrement</button>
        <button onClick={()=> {dispatch(incrementByAmount(20))}}>Add Amount by 20</button>
    </div>
  )
}

export default Counter;