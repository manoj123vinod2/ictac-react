import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Usebutton = () => {
var[x,setx]=useState();
const inp1=()=>{
    setx("react")
}
const inp2=()=>{
    setx("angular")
}
const inp3=()=>{
    setx("next")
}
useEffect(()=>{
    inp3()
},[])

  return (
    <div>
<Typography variant='h2'>{x}</Typography>

<Button variant='contained'onClick={inp1}>react</Button>
<Button variant='contained'onClick={inp2}>angular</Button>
<Button variant='contained'onClick={inp3}>next</Button>



    </div>
  )
}

export default Usebutton