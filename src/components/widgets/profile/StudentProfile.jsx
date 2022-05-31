import React from 'react'
import {Grid,Typography,Paper,Avatar} from '@mui/material'
import StudentNavbar from '../navigation/StudentNavbar'
import getUserInfo from '../../../functions/getUserInfo'

export default function StudentProfile() {
  const [userDetails,setUserDetails] =React.useState({})
  const [first,setFirst] = React.useState('')
  React.useEffect(()=>{
     let users = getUserInfo()
     setUserDetails(users)
     setFirst(users.name.split("")[0].toString().toUpperCase())
  },[])
  return (
    <Grid>
     <StudentNavbar />
      <div style={{margin:"5rem"}}>
        <h1 style={{color:"rgb(115, 8, 115)",textAlign:"center"}}>My Account  Details</h1>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <div style={{marginLeft:"32rem"}} >
          <Avatar alt={first} src="/static/images/avatar/2.jpg" />
          </div>
          <Grid mt={3} container xs={12} style={{marginLeft:"28rem"}} gap={3} direction={"column"}>
            <Grid xs={6}>
            <Typography style={{color:"#222"}}><b>Name :</b> {userDetails.name} </Typography>
            </Grid>
             <Grid xs={6} >
             <Typography style={{color:"#222"}} ><b>Email :</b> {userDetails.email} </Typography>
             </Grid>
             <Grid xs={6} >
             <Typography style={{color:"#222"}} ><b>USN :</b> {userDetails.usn} </Typography>
             </Grid> 
          </Grid>
        </Paper>
    </div>
    </Grid>
  )
}
