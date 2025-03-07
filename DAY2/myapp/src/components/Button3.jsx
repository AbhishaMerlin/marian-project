import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Button3 = () => {
    const [name, setName]=useState("")
    const reactName=()=>setName("React")
    const viewName=()=>setName("View")
    const actionName=()=>setName("Action")
    useEffect(()=>{reactName()},[])

  return (
    <div>
        <Typography variant="h3">welcome too  {name}</Typography>
        <Button variant="outlined" onClick={reactName}>REACT</Button>
        <Button variant="outlined" onClick={viewName}>VIEW</Button>
        <Button variant="outlined" onClick={actionName}>ACTION</Button>

      </div>
    )
  }
  
  export default Button3;