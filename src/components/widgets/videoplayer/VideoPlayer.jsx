import { TryRounded } from '@mui/icons-material'
import { Grid,Button, Stack } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player/lazy'
import {NotificationsActive,Notifications} from '@mui/icons-material'

export default function VideoPlayer() {
  const [btn,setBtn] = React.useState(false)
  const [course,setCourse] = React.useState([])
  const [id,setId] = React.useState('')
  React.useEffect(()=>{
    let courses = JSON.parse(sessionStorage.getItem('courses'))
    let url = window.location.pathname;
    let id = url.substring(url.lastIndexOf('/') + 1);
    setId(id)
    console.log(id)
    //debugger;
    let temp = courses.filter(ele=>{
      if(ele.courseID===parseInt(id)){
        return ele;
      }
    })
    console.log(temp)
    setCourse(temp)
  },[])
  const showQuestionsButton = async()=>{
      setBtn(true)
  }
  const getQuizQuestions = async()=>{
    window.location.href = `/exam/${id}`
  }
  
  return (
    <>
    {course.length?(<>
      <Grid margin={5} container xs={12} gap={3} direction={"row"}>
     <Grid item xs={7}>
     <h1 style={{color:"rgb(115, 8, 115)"}} >{course[0].courseName}</h1>
      <ReactPlayer
      url={`https://localhost:44304/${course[0].url}`} 
      controls={true}
      onEnded={showQuestionsButton}
      playIcon={<TryRounded/>}
      />
     </Grid>
     <Grid mt={5} item xs={4}>
     <h2 style={{color:"rgb(115, 8, 115)"}} >Course Description </h2>
     <h4>{course[0].description}</h4>
     <br></br><br></br>
     <h2 style={{color:"rgb(115, 8, 115)"}} >Topic covered </h2>
     <ul>
       {
         course[0].topics.map(e=>(
          <li>{e}</li>
         ))
       }
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
    </>):null}
    </>
  )
}
