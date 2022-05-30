import { TryRounded } from '@mui/icons-material'
import { Grid,Button, Stack } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player/lazy'
import {NotificationsActive,Notifications} from '@mui/icons-material'

export default function VideoPlayer() {
  const [btn,setBtn] = React.useState(false)
  const [sub,setSub] = React.useState(false)
  const showQuestionsButton = async()=>{
      setBtn(true)
  }
  const getQuizQuestions = async()=>{
    window.location.href = `/exam/${'2'}`
  }
  return (
    <Grid margin={5} container xs={12} gap={3} direction={"row"}>
     <Grid item xs={7}>
     <h1 style={{color:"rgb(115, 8, 115)"}} >React front-end development</h1>
      <ReactPlayer
      url='https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/49_20HQOeijh9fog1/videoblocks-20053_b5pdzwqmk__7ed819dd7cf44b9d44af2e51babcbcf6__P360.mp4' 
      controls={true}
      onEnded={showQuestionsButton}
      playIcon={<TryRounded/>}
      />
      <Stack direction={"row"} mt={3}>
      <h4>    K.N Murthy</h4>
          {
            sub?(<Button 
              size='small'
              variant="contained"
              sx={{ mt: 2, mb: 2 ,ml:2}}
              style={{ backgroundColor: "grey", color: "#fff" }} 
              ><NotificationsActive />Subscribed</Button>):(<Button 
                size='small'
                variant="contained"
                sx={{ mt: 2, mb: 2 ,ml:2}}
                style={{ backgroundColor: "rgb(107, 13, 107)", color: "#fff" }} 
                ><Notifications />Subscribe</Button>)
          }
      </Stack>
     </Grid>
     <Grid mt={5} item xs={4}>
     <h2 style={{color:"rgb(115, 8, 115)"}} >Course Description </h2>
     <h4>We recommend reading this tutorial, in the sequence listed in the left menu.Java is an object oriented language and some concepts may be new. Take breaks when needed, and go over the examples as many times as needed.</h4>
     <br></br><br></br>
     <h2 style={{color:"rgb(115, 8, 115)"}} >Topic covered </h2>
     <ul>
       <li>React components</li>
       <li>JSX</li>
       <li>React Hooks</li>
       <li>Material UI adpotion</li>
       <li>Next.js Implementation</li>
     </ul>
     {
        btn ? (<Button
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          style={{ backgroundColor: "rgb(107, 13, 107)", color: "#fff" }}
          onClick={getQuizQuestions}
        >Take Test</Button>):null
     }
     </Grid>
    
    </Grid>
  )
}
