import * as React from 'react';
import {Button,Toolbar,Box,AppBar} from '@mui/material';
import {Link} from 'react-router-dom';
const Bar2=()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <div style={{ display: "flex" }}>
        <Button variant='contained' color='inherit'style={{ marginLeft:1130}}><Link to={'/Add'}>Add</Link></Button>
        </ div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Bar2;
