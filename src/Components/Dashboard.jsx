import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

const Dashboard = () => {
  const [dash,setdash]=useState([]);
axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
//console.log(res.data)
setdash(res.data)
console.log(dash)
})
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
           <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>TITLE</TableCell>
            <TableCell>COMPLETED</TableCell>
            </TableRow> 
          </TableHead>
<TableBody>
  {dash.map((val)=>{
    return(
      <TableRow>
      <TableCell>{val.id}</TableCell>
      <TableCell>{val.title}</TableCell>
      <TableCell>{val.userId}</TableCell>
    </TableRow>
    )
  })}
  
</TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Dashboard