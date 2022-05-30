import { Grid } from '@mui/material'
import React from 'react'
import StudentNavbar from '../../widgets/navigation/StudentNavbar';
import MediaCard from '../../widgets/videoplayer/MediaCard';
import './studentdashbord.css'
const data = [
  {
    id:1,
    name:'Java full stack development',
    author:'k.n murthy',
    thumbnail:'https://thecodex.me/static/5c02153876c8f9c5740350364990a18a/ee604/Java_Thumbnail_java_875e0d6a31.png',
    updatedAt:'07-05-2023',
    description:'We recommend reading this tutorial, in the sequence listed in the left menu.Java is an object oriented language and some concepts may be new. Take breaks when needed, and go over the examples as many times as needed.'
  },
  {
    id:2,
    name:'ReactJS front-end development',
    author:'Rajesh Kamath',
    thumbnail:'https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/01/pasted-image-0-2.png',
    updatedAt:'09-07-2015',
    description:'We recommend reading this tutorial, in the sequence listed in the left menu.Java is an object oriented language and some concepts may be new. Take breaks when needed, and go over the examples as many times as needed.'
  },
  {
    id:3,
    name:'Java full stack development - 2011',
    author:'k.n murthy',
    thumbnail:'https://thecodex.me/static/5c02153876c8f9c5740350364990a18a/ee604/Java_Thumbnail_java_875e0d6a31.png',
    updatedAt:'07-05-2023',
    description:'We recommend reading this tutorial, in the sequence listed in the left menu.Java is an object oriented language and some concepts may be new. Take breaks when needed, and go over the examples as many times as needed.'
  },
  {
    id:4,
    name:'Java full stack development - 2011',
    author:'k.n murthy',
    thumbnail:'https://thecodex.me/static/5c02153876c8f9c5740350364990a18a/ee604/Java_Thumbnail_java_875e0d6a31.png',
    updatedAt:'07-05-2023',
    description:'We recommend reading this tutorial, in the sequence listed in the left menu.Java is an object oriented language and some concepts may be new. Take breaks when needed, and go over the examples as many times as needed.'
  }
]
export default function StudentDashbord() {
  const [courses,setCourses] = React.useState(data)
  const videoSelection = async(videoId)=>{
     window.location.href = `/course/${videoId}`
  }
  return (
    <>
     <StudentNavbar name={""} />
     <div style={{marginTop:"5rem",marginBottom:"3rem"}}>
      {
        courses.map(course=>(
          <Grid container ml={4} style={{marginTop:"2rem"}} xs={12}>
            <MediaCard key={course.id} course={course} videoSelection={videoSelection} />
            </Grid>
        ))
      }
    </div>
    </>
  )
}
