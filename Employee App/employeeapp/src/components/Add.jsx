import { Button, Input, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Add = (props) => {
  var [inputs,setInputs]=useState({Name:"",Age:"",Dept:"",Sal:""})
  var navigate=useNavigate()
  var location=useLocation()
  const inputHandler=(e)=>{
    setInputs({...inputs,[e.target.name]:e.target.value});
    console.log(inputs);
  }
  const addHandler=() =>{
    axios.post("http://localhost:3004/add",inputs)
    .then((res)=>{
      console.log(res)
      alert(res.data.message)
      navigate('/view')
    })
  }
  

  useEffect(()=>{
    if(location.state !== null){
      setInputs({
        ...inputs,
        Name:location.state.val.Name,
        Age:location.state.val.Age,
        Dept:location.state.val.Dept,
        Sal:location.state.val.Sal,
      })
    }
  },[])

  return (
    <div>
        <br /><br /><br /><br /><br /><TextField varient='outlined' label='name' name='Name' value={Input.name} onchange={inputhandler}/><br /><br />
        <TextField varient='outlined' label='age' value={Input.age} onchange={inputhandler}/><br /><br />
        <TextField varient='outlined' label='dept' value={Input.dept} onchange={inputhandler}/><br /><br />
        <TextField varient='outlined' label='salary' value={Input.salary} onchange={inputhandler}/>
        <Button variant='contained' color='success' onClick={addHandler}>Submit</Button>
    </div>
  )
}

export default Add