import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Listmap = () => {
    var[inmp,setinmp]= useState(["ICTAK"])
    var[data,setData]=useState("")
    const add=(e)=>{
        // console.log(e)
        setData(e.target.value)
        
    }
    const addbutton=()=>{
        setinmp([...inmp,data])
        console.log("sub",inmp)
        setData("")
    }
  return (
    <div>
        <TextField variant='outlined' label='Enter name' onChange={add} value={data}><br /><br /><br /></TextField>
        <Button variant='containes' onClick={addbutton}>Submit</Button>
        <ul>
        {inmp.map((v) => {
        return<li>{v}</li>})}
        </ul>
        
    </div>
  )
}

export default Listmap