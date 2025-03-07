import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup2 = () => {
  return (
    <div varient='outlined'>
        <h1>SIGNUP FORM</h1>

       <TextField varient='outlined' label='useraname'/><br/>
        <TextField varient='outlined' label='email'/><br/>
       <TextField varient='outlined' label='password'/><br/>
        <TextField varient='outlined' label='Reenter password'/><br/>
        <Button variant='outlined'>Submit</Button>
    </div>
  )
}

export default Signup2