import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var [name,setname]=useState("Abhisha")
    var [tempName,setTempName]=useState()
    const handleinput = (e) => {
      console.log(e.target.value)
      setname(e.target.value)
    }
    const handleSubmit=() =>{
      setTempName(name)
    } 

  return (
    <div><Typography variant='h3'>Welcome{tempName}</Typography>
    <TextField variant='outlined'onChange={handleinput}/>
    <Button variant='contained' onClick={handleSubmit}>Submit</Button>
    
    {/* <Button 
    variant="contained" 
    color="primary" 
    onClick={handleSubmit} 
    style={{ marginLeft: '10px' }}>
</Button> */}
</div>
  )
}

export default Statebasics