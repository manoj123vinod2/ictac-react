import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions'
import React, { useState } from 'react'

const Mapping = () => {
    var[name,setname]=useState([

        {"sname":"maya","age":25},
        {"sname":"joseph","age":65},
        {"sname":"maria","age":33}
    ]
)
  return (
    <div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
<TableHead>
    <TableRow>     
    <TableCell >name</TableCell>
    <TableCell >age</TableCell>

    </TableRow>
</TableHead>

<TableBody>
{name.map((v,i)=>{
return(
    <TableRow>

<TableCell >{v.sname}</TableCell>
    <TableCell >{v.age}</TableCell>
    </TableRow>
)
})}

</TableBody>
</Table>
    </TableContainer>





    </div>
  )
}

export default Mapping