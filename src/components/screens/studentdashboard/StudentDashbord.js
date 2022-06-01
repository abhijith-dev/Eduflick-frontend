import { Grid } from '@mui/material'
import React from 'react'
import { videoDetails } from '../../../Interceptors/student';
import StudentNavbar from '../../widgets/navigation/StudentNavbar';
import MediaCard from '../../widgets/videoplayer/MediaCard';
import './studentdashbord.css';
import {addItem} from '../../../store/session/storage';
import Loading from '../../widgets/loading/Loading';

export default function StudentDashbord() {
  const [courses,setCourses] = React.useState([])
  const [loading,setLoading] = React.useState(false)
  React.useEffect(()=>{
    setLoading(true)
    async function fetch(){
      let data = await videoDetails()
      setCourses(data)
      addItem('courses',JSON.stringify(data))
      setLoading(false)
    }
    fetch()
  },[])
  const videoSelection = async(videoId)=>{
     window.location.href = `/course/${videoId}`
  }
  return (
    <>
     <StudentNavbar name={""} />
     {
       loading?(<Loading />):null
     }
    {
      courses!=null?(
        <div style={{marginTop:"5rem",marginBottom:"3rem"}}>
      {
        courses.map(course=>(
          <Grid container ml={4} style={{marginTop:"2rem"}} xs={12}>
            <MediaCard key={course.courseID} course={course} videoSelection={videoSelection} />
            </Grid>
        ))
      }
    </div>
      ):(<h3 style={{textAlign:"center",color:"#fff",marginTop:"13rem"}}> no courses available❕ please subscribe to trainers to get courses.</h3>)
    }
    </>
  )
}
