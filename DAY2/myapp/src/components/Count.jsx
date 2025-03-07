import { Button } from '@mui/material';
import React, { useState } from 'react'

const Count = () => {
    const [count,setCount] = useState(0)
    const increment = () =>setCount(count + 1)
    const decrement = () =>setCount(count - 1)
    return (
    <div><h1>Counter</h1>
    <h2>{count}</h2>
    <Button onClick={increment}>+</Button>
    <Button onClick={decrement}>-</Button>
    </div>
  )
}

export default Count