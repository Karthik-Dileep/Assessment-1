import { TextField,Button, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div style={{textAlign:'center'}}>
       <header>
      <h1>Welcome to the Admin Page</h1>
    </header>
    <br/>
    <br/>
    <br/>
      <h4>Name : <TextField id="outlined-basic" label="Enter The Name" variant="outlined" /></h4>
       <h4>Password: <TextField type='password'id="outlined-basic" label="Password" variant="outlined"></TextField></h4>
       <Button variant='contained'color="error">Login</Button>
     
        <footer>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <p>&copy; 2023 The Invincibles. All rights reserved.</p>
    </footer>
      
    </div>
  )
}

export default Add