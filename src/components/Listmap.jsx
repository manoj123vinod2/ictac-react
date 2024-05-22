import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'


const Listmap = () => {

var[inp,setinp]=useState();
var[data,setdata]=useState(["ictak"])

const inputhandler=(e)=>{
  setinp(e.target.value)
  console.log(inp)
}



const  add=()=>{
    console.log("clicked")
    setdata([...data,inp])
}



  return (
    <div>
<ul>
{data.map((v,i)=>{
  return<li>{v}</li>
})}

</ul>



<TextField variant='outlined' label="enter your name" onChange={inputhandler} value={inp}/><br /><br />
<Button variant="contained" onClick={add}>go</Button>

    </div>
  )
}

export default Listmap