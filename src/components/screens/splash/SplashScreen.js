import React from 'react'
import SplashNavbar from '../../widgets/navigation/SplashNavbar'
import './splash.css'
import Grid from '@mui/material/Grid/Grid'
import {Stack,Button} from '@mui/material'
import SplashImage from '../../../assets/images/splash-image.png'
import { Link } from 'react-router-dom'

export default function SplashScreen() {
  return (
    <React.Fragment>
        <SplashNavbar />
        <Grid item mt={5} ml={5}  container xs={12} direction={"row"} spacing={6}>
          <Grid item xs={6} >
          <div className='content'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum....</p> 
          <p>please login here...</p>
          </div>
          <Stack className='buttons' mt={5} ml={5}  direction={"row"} spacing={5}>
          <Link to={"/student"} style={{textDecoration:"none"}}><Button  size={"large"} style={styles.button}>I'm Student</Button></Link>
            <Link to={"/teacher"} style={{textDecoration:"none"}}><Button  size={"large"}  style={styles.button}>I'm Teacher</Button></Link>
          </Stack>
          </Grid>
          <Grid className='image-div' item xs={6}>
          <img  src={SplashImage} alt={"logo"} width={'500px'} height={'400px'} />
          </Grid>
        </Grid>
    </React.Fragment>
  )
}

const styles ={
  button : {backgroundColor:"rgb(107, 13, 107)",color:"#fff",},
}
