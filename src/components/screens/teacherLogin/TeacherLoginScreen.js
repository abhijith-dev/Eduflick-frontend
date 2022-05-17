import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from 'react-router-dom';
import './teacherlogin.css'
const customTheme = createTheme({
    palette:{
      dark:"#222"
    }
})

export default function TeacherLoginScreen() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div style={{width:"100vw",height:"100%",backgroundColor:"#222",color:"#222"}}>
      <ThemeProvider theme={customTheme}>
     <Container  component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop:"7rem"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Trainer Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} validate={true} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              color="secondary"
              style={{backgroundColor:"#fff",borderRadius:"10px"}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              color="secondary"
              style={{backgroundColor:"#fff",borderRadius:"10px"}}
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor:"rgb(107, 13, 107)",color:"#fff"}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link color={'#fff'} className='link' to={"/reset"}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link color={'#fff'} className='link' to={"/signup-teacher"}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}