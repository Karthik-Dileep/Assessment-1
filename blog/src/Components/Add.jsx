import { TextField, Typography } from '@mui/material'
import React from 'react'
const Add = () => {
  return (
    <div>
        <br /><br /><br /><br /><br />
        <Typography variant='h3'>Blog-Name:<TextField variant='outlined' label='Enter Blog Name'></TextField></Typography>
        <br /><br />
        <Typography variant='h3'>Author-
        Name:<TextField variant='outlined' label='Enter Author Name'></TextField></Typography>
        <br /><br />
        <Typography variant='h3'>Description:<TextField variant='outlined' label='Description about Blog'></TextField></Typography>
    </div>
  )
}
export default Add;