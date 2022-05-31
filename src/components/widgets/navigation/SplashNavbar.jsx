import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../../../assets/images/logo.png';

export default function SplashNavbar() {
  return (
    <Box>
      <AppBar
      sx={styles.headers}
      position="static">
        <Toolbar variant="dense">
        <img src={Logo} alt="logo" style={{borderRadius:"100%"}} width={"45px"} height={"45px"} />
        &nbsp;&nbsp;
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Eduflick
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const styles = {
    headers :{ 
        flexGrow: 1,
        height:"4rem",
        backgroundColor:"rgb(107, 13, 107)",
        justifyContent:"center",
        boxShadow:"0px 0px 4px 0px rgb(187, 187, 187)"
      }
}
