import { TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <br /><br /><br /><br /><br />
        <Typography variant='h2'>signup</Typography>
        <TextField id="filled-basic" label="username" variant="filled" /><br/>
        <TextField id="filled-basic" label="password " type='password' variant="filled" /><br/>
        <TextField id="filled-basic" label="name" variant="filled" /><br/>

        <TextField id="filled-basic" label="place" variant="filled" /><br/>


    </div>
  )
}

export default Signup