import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='success'>
        <Toolbar>
            <Typography  variant="h6"style={{textAlign:'center'}}component="div" sx={{ flexGrow: 1 }}>
                AdminPage
            </Typography>

            



        </Toolbar>
        </AppBar>



    </Box>




  )
}

export default NavBar