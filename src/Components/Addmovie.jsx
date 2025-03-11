import { Button, TextField } from '@mui/material'
import React from 'react'

const Addmovie = () => {
  return (
    <div>
      Add Movies here!!!
        <TextField required variant='outlined' label='Id'/>
        <br></br><br></br>
        <TextField variant='outlined' label='Movie Name'/>
        <br></br><br></br>
        <TextField multiline label='movie description'/>
        <br></br><br></br>
        <TextField required variant='outlined' type='number' label='Rating'/>
        <br></br><br></br>
<Button variant='contained'>Add Movie</Button>
    </div>
  )
}

export default Addmovie