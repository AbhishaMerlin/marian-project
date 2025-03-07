import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography varient='h2'>MY APP</Typography>
                <Link to ="/add">
               <Button variant="contained">Add</Button>  
               </Link>
               <Link to ="/view">
               <Button variant="contained">View</Button>  
               </Link>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar