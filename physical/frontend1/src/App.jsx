import React, { useEffect,useState } from 'react'

const App = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    async function fetchData(){
      try {
        const response = await fetch ('http://localhost:3000/products')
        const result = await response.json()
        console.log(result)
        setData(result)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])
  return (
    <div>
      <h1>Product Names</h1>
      <ul>
        {data.map((item,index)=>(
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App