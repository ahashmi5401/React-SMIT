import React, { useState } from 'react'
import {Box, Paper, Typography} from '@mui/material'
import Input from '../Input'
import Button from '../Btn'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data , setData] = useState([])

    const handleLogin = () => {
        console.log(email);
        console.log(password);
        setData((prev) => [...prev, {
            email : email,
            password : password
        }])
        console.log(data);
        
    }
  return (
    <Box
    sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
     <Paper elevation={3} sx={{
         height: "300px",
            width: "300px",
            borderRadius: "20px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center"
        }}>
       <Typography sx={{
        fontWeight: "bold",
        fontSize: '32px'
       }}>Welcome Back!</Typography>

       <Box sx={{
           display:'flex',
           flexDirection:'column',
        }}>
      <Input label={'email'} value={email} setValue={setEmail}/>
      <Input label={'password'} value={password} setValue={setPassword}/>
       </Box>
       <Button  handleLogin={handleLogin} />
    </Paper>
           </Box>
  )
}

export default Login