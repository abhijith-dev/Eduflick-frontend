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
import './studentlogin.css'
import { loginStudent } from '../../../Interceptors/authentication';
import {addItem} from '../../../store/local/storage'
import Error from '../../widgets/exception/Error';
import Loading from '../../widgets/loading/Loading';

const customTheme = createTheme({
    palette:{
      dark:"#222"
    }
})

export default function StudentLoginScreen() {
 const [error,setError] = React.useState(false)
 const [errorMessage,setErrorMessage] = React.useState('')
 const [loading,setLoading] = React.useState(false)
  const handleSubmit = async(event) => {
    event.preventDefault();
    setLoading(true)
    const data = new FormData(event.currentTarget);
    let body = {
      usn: data.get('usn'),
      password: data.get('password'),
    };
    let response = await loginStudent(body)

    if(response.error){
      setLoading(false)
      setError(true)
      setErrorMessage('authentication problem')
    }
    else{
      setLoading(false)
      addItem('token',`Bearer ${response.data.token}`)
      addItem('role','learner')
      addItem('user',JSON.stringify(response.data.learner))
      window.location.href="/"
    }
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
             Student Sign In
          </Typography>
          {
            error?(<Error message={errorMessage} source={'while logging student'}/>):null
          }
          {
            loading?(<Loading />):null
          }
          <Box component="form" onSubmit={handleSubmit} validate={true} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="usn"
              label="USN"
              name="usn"
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
                <Link className="link" color={'#fff'} to={'/reset'}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link color={'#fff'} className="link" to={'/signup-student'}>
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