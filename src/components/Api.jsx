import { Paper, Table, TableBody, TableCell, TableContainer, TableRow ,TableHead} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Api = () => {
    var[use,setuser]=useState([])
   useEffect(()=>{axios.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    console.log(response.data)
    setuser(response.data)
})
},[]) 
  return (
    <div>

<TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
<TableHead>
    <TableRow>     
    <TableCell >id</TableCell>
    <TableCell >name</TableCell>
    <TableCell >city</TableCell>

    </TableRow>
</TableHead>

<TableBody>
{use.map((v,i)=>{
return(
    <TableRow>

<TableCell >{v.id}</TableCell>
    <TableCell >{v.name}</TableCell>
    <TableCell >{v.address.city}</TableCell>

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