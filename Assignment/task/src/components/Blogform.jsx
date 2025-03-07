import { Button, TextField } from '@mui/material';
import React from 'react';

const Blogform = () => {
  return (
    <div>
        <h1>Blogform</h1>
        <form noValidate autoComplete="off">
            <TextField variant='outlined' label='Name' fullWidth margin="normal" /><br/>
            <TextField variant='outlined' label='Email' fullWidth margin="normal" /><br/>
            <TextField variant='outlined' label='Age' fullWidth margin="normal" /><br/>
            <TextField variant='outlined' label='Class' fullWidth margin="normal" /><br/>
            <Button variant='outlined' type="submit">Submit</Button>
        </form>
    </div>
  );
}

export default Blogform;
