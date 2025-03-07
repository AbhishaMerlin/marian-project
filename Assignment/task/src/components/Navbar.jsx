import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h1'>Blog</Typography>
                <Link to="/blogform">
                <Button variant="contained">Form</Button>
                </Link>
                <Link to="/api">
                <Button variant="contained">Home</Button>
                </Link>
            </Toolbar>
        </AppBar>
        <br /><br /><br />
    </div>
  )
}

export default Navbar