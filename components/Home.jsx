import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Home = () => {
    var[user, setuser]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data)
            setuser(response.data)
        })

  return (
    <div>
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>title</TableCell>
                </TableRow>
                <TableBody>
                    {user.map((val)=>{
                        return(
                            <TableRow>
                                <TableCell>{val.id}</TableCell>
                                <TableCell>{val.title}</TableCell>

                            </TableRow>
                        )
                        }
                    )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Home