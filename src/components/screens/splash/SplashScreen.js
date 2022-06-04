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
          <h3 className='diff'>Eduflick help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies</h3> 
          <h3 className='diff'>We’re committed to changing the future of learning for the better. Dig into our original research to learn about the forces that are shaping the modern workplace.</h3> 
          <h4>please login here...</h4>
          </div>
          <Stack className='buttons' mt={5} ml={5}  direction={"row"} spacing={5}>
          <Link to={"/student"} style={{textDecoration:"none"}}><Button size={"large"} style={styles.button}>I'm Student</Button></Link>
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
