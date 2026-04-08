import { TextField } from '@mui/material'
import React from 'react'

const Input = ({label , value , setValue}) => {
  return (
    <TextField id="standard-basic" label={label} variant="standard"  value={value}
    onChange={(e) => setValue(e.target.value)}
    sx={{
        width:'280px',
        marginBottom:'2px'
    }}
    />
  )
}

export default Input