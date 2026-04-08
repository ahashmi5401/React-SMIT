import React from 'react'
import { Button } from '@mui/material'

const Btn = ({handleLogin}) => {
  return (
    <Button variant="outlined"
    onClick={() => handleLogin()}
    sx={{
      marginTop:'10px'
    }}
     >Login</ Button>
  )
}

export default Btn;