import * as React from 'react';
import {IconButton,Button,Typography,Toolbar,Box,AppBar,} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';

const Bar=()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Blog Dashboard</Typography>
          <Button variant='contained' color="inherit"><Link to={"/Home"}>Home</Link></Button>
        {/* <Button variant='contained' color='inherit'><Link to={'/Add'}>Add</Link></Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Bar;
