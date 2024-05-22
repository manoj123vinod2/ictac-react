import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
//var name="athulps"
var[fname,fsetname]=useState("world");
const[val,setval]=useState()

const handleinput=(e)=>{
    console.log(e.target.value)
    fsetname(e.target.value)
}
const submithandler=()=>{
    console.log("clicked")
    setval(fname)
}

  return (
    <div>

<Typography variant='h2'>welcome {val}</Typography>
<TextField variant='outlined' label="enter your name" onChange={handleinput}></TextField>
<Button variant="outlined" onClick={submithandler}>go</Button>

    </div>
  )
}

export default Statebasics