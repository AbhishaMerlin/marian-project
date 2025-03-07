import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
               <Typography varient='h1'>MY APP</Typography>
               <Link to ="/home">
               <Button variant="contained">Home</Button>  
               </Link>

               <Link to ="/add">
               <Button variant="contained">Add</Button>  
               </Link>
            </Toolbar>
        </AppBar>
        <br /><br /><br />
    </div>
  )
}

export default Navbar