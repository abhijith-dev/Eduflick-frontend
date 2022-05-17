import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
export default function SplashNavbar() {
  return (
    <Box>
      <AppBar
      sx={styles.headers}
      position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
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
