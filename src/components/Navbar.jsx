import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div> 
        <AppBar>
           <Toolbar>
<Typography variant='h6'>Myapp</Typography>
<Button  variant="contained" color="warning"><Link to ='/login'>login</Link></Button>&nbsp;&nbsp;
<Button  variant="contained" color="warning"><Link to ='/signup'>signup</Link></Button>&nbsp;&nbsp;
<Button  variant="contained" color="warning"><Link to ='/s'>state</Link></Button>&nbsp;&nbsp;
<Button  variant="contained" color="warning"><Link to ='/counter'>counter</Link></Button>&nbsp;&nbsp;
<Button  variant="contained" color="warning"><Link to ='/use'>use</Link></Button>&nbsp;&nbsp;
<Button  variant="contained" color="warning"><Link to ='/list'>list</Link></Button>
<Button  variant="contained" color="warning"><Link to ='/m'>map</Link></Button>
<Button  variant="contained" color="warning"><Link to ='/api'>api</Link></Button>
<Button  variant="contained" color="warning"><Link to ='/card1'>cards</Link></Button>


              </Toolbar>
        </AppBar>
<br /><br /><br /><br /><br />




    </div>
  )
}

export default Navbar