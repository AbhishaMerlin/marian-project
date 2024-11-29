import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Api = () => {
    const [user,userdata]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> {
            console.log(response.data)
            userdata(response.data)
        })
        .catch((error)=>{
            console.error('Error fetching data:', error)
        }
        )
    },[])
    
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>userId</TableCell>
                         <TableCell>id</TableCell>
                         <TableCell>title</TableCell>
                         <TableCell>body</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((val)=>{
                        return(
                            <TableRow key={val.id}>
                                <TableCell>{val.userId}</TableCell>
                                <TableCell>{val.id}</TableCell>
                                <TableCell>{val.title}</TableCell>
                                <TableCell>{val.body}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Api
