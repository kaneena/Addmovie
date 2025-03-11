import { AppBar, Toolbar, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
       <AppBar>
        <Toolbar>
           <Typography variant='h3'>
            MovieApp
            </Typography> 
            <Link to={'/home'}> <button variant='contained' style={{backgroundColor:'white'}}>Home</button> </Link> &nbsp;
           
            <Link to={'/login'}> <button variant='contained' style={{backgroundColor:'white'}}>Login</button> </Link> &nbsp;
            <Link to={'/signup'}> <button variant='contained' style={{backgroundColor:'white'}}>Signup</button> </Link> &nbsp;
        
           <Link to={'/addmovie'}> <button variant='contained' style={{backgroundColor:'white'}}>Add Movie</button> </Link> &nbsp;
           <Link to={'/logout'}> <button variant='contained' style={{backgroundColor:'white'}}>Logout</button> </Link> &nbsp;
        
        </Toolbar>
        </AppBar>
        <br></br> <br></br><br></br><br></br>
    </div>
  )
}

export default Nav