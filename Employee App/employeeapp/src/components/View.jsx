import { Table, TableBody, TableContainer, TableHead, TableRow ,TableCell, Button} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
  var[user,setuser]=useState([])
  useEffect(()=>{})
  axios.get("http://localhost:3004/view")
  
  .then((response)=>{
    console.log(response.data)
    setuser(response.data)
  })
  const delValue =(id)=>{
    console.log(id);
    axios.delete("http://localhost:3004/remove/"+id)
    .then((response)=>{
      alert(response.data.message);
      window.location.reload();
    })
    const updateValue=(val)=>{
      console.log("up clicked");
      window,location.reload();
    }
  }
  return (
    <div> 
      <br />
      <br /><br /><br /><br /><br />
      <TableContainer>
        <Table>
          <TableHead>
           <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>
              <Button variant='contained' color="error" onClick={()=>{delValue(val._id);}}>Delete</Button> 
              &nbsp;
               <Button variant='contained' color="primary" onClick={()=>{updateValue(val);}}>Update</Button>

            </TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
            {user.map((val)=>{
              return(
          <TableRow>
            <TableCell>{val.Name}</TableCell>
            <TableCell>{val.Age}</TableCell>
            <TableCell>{val.Dept}</TableCell>
            <TableCell>{val.Sal}</TableCell>
            <TableCell>
              <Button variant='contained' color="error" onClick={()=>{delValue(val._id);}}>Delete</Button>
              </TableCell>
          </TableRow>
          )
        })}
          </TableBody>
        </Table>
       </TableContainer>
    </div>
  )
}

export default View