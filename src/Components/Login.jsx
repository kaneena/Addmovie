import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <TextField required variant='outlined' type='email' label='Email'/>
      <br></br><br></br>
      <TextField required variant='outlined' type='password' label='Password'/>
        <br></br><br></br> <Button variant='contained'>Login</Button>&nbsp;
        <Button variant='contained'>Forgot Password</Button>
    </div>
  )
}

export default Login