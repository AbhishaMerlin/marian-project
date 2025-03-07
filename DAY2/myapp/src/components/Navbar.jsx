import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
               <Typography varient='h1'>MY APP</Typography>
               <Link to ="/login">
               <Button variant="contained">Login</Button>  
               </Link>

               <Link to ="/signup2">
               <Button variant="contained">Signup</Button>  
               </Link>
               <Link to ="/statebasics">
               <Button variant="contained">Basics</Button>  
               </Link>
               <Link to ="/count">
               <Button variant="contained">Count</Button>  
               </Link>
               <Link to ="/button3">
               <Button variant='contained'>Buttons</Button>
               </Link>
               <Link to ="/listmap">
               <Button variant='contained'>ListMap</Button>
               </Link>
               <Link to ="/api">
               <Button variant='contained'>Api</Button>
               </Link>
               <Link to ="/product">
               <Button variant='contained'>Product</Button>
               </Link>
            </Toolbar>
        </AppBar>
        <br /><br /><br />
    </div>
  )
}

export default Navbar