import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { forgotPassword, resetPassword } from '../../../Interceptors/authentication';
import {addItem} from '../../../store/session/storage'
import Error from '../../widgets/exception/Error';

const theme = createTheme({
    palette:{
        dark:'#222'
    }  
});

export default function ResetPasswordTeacher() {
  const [toggle,setToggle] = React.useState(true)
  const [error,setError] = React.useState(false)
  const [errorMessage,setErrorMessage] = React.useState('')
  
  const handleSubmit1 =async (event) => {
    
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = new FormData()
    body.append('ToEmail',data.get('email'))
    await forgotPassword(body)
    addItem('value',data.get('email'))
    setToggle(false)
  }

  const handleSubmit2 =async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let body = {
       pin: data.get('pin'),
       password:data.get('password1')
    }  
    let response = await resetPassword(body)
    if(response.error){
      setError(true)
      setErrorMessage('opps something went wrong')
    }
    else{
      window.location.href = "/teacher"
    }
  };

  return (
    <ThemeProvider theme={theme}>
     <div style={{width:"100vw",height:"100%",backgroundColor:"#222",color:"#222"}} >
      {
          toggle?(
              <>
               <Container component="main" maxWidth="xs" >
        <Box
          sx={{
            marginTop:'8rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           reset your password
          </Typography>
          <Box component="form" onSubmit={handleSubmit1} validate={true} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              color='secondary'
              id="email"
              label="Email Address"
              style={{backgroundColor:"#fff",borderRadius:"10px"}}
              name="email"
              autoComplete="off"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor:"rgb(107, 13, 107)",color:"#fff"}}
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
              </>
          ):(
              <>
    <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset your password
          </Typography>
          {
            error ? (<Error message={errorMessage} source={"while reseting password"}></Error>):null
          }
          <Box component="form" onSubmit={handleSubmit2} validate={true} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="pin"
              label="PIN"
              name="pin"
              color='secondary'
              style={{backgroundColor:"#fff",borderRadius:"10px"}}
              type="number"
              autoComplete="off"
              autoFocus={false}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password1"
              label="new password"
              name="password1"
              type="password"
              color='secondary'
              style={{backgroundColor:"#fff",borderRadius:"10px"}}
              autoComplete="off"

            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password2"
              type="password"
              label="confirm password"
              style={{backgroundColor:"#fff",borderRadius:"10px"}}
              name="password2"
              color='secondary'
              autoComplete="off"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor:"rgb(107, 13, 107)",color:"#fff"}}
              sx={{ mt: 3, mb: 2 }}
            >
              Reset
            </Button>
          </Box>
        </Box>
      </Container>
              </>
          )
      }
     </div>  
    </ThemeProvider>
  );
}