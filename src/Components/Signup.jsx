import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      Signup here!
      <br></br>
      <TextField variant='outlined' required label='Name'/>
      <br></br><br></br>
      <TextField required variant='outlined' type='email' label='Email'/>
            <br></br><br></br>
            <TextField required variant='outlined' type='password' label='Password'/>
            <br></br><br></br>
            <TextField variant='outlined' required label='Phone Number' type='phone'/>
      <br></br>
      <br></br><Button variant='contained'>Signup</Button>
      
    </div>
  )
}

export default Signup