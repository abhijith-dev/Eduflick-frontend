import { Grid } from '@mui/material'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TeacherNavbar from '../navigation/TeacherNavbar';
import { TeacherCourses } from '../../../Interceptors/teacher';

export default function TeacherCourse() {
  const [courses,setCourses] = React.useState([])
  React.useEffect(()=>{
     async function fetch(){
        let data  = await TeacherCourses()
        setCourses(data)
     }
     fetch()
  },[])
  return (
    <Grid>
        <TeacherNavbar />
       <div style={{margin:"5rem"}} >
           <h1 style={{color:"rgb(115, 8, 115)",textAlign:"center"}} >My Courses</h1>
           {
             courses.length === 0 ?(<h3 style={{textAlign:"center",color:"#fff",marginTop:"10rem"}}>No completed course available </h3>):null
           }
       {
            courses.map(course=>(
                <div className='video-card' style={{margin:"2rem"}}>
                <Accordion sx={{ width: "98%",backgroundColor:"#fff"}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color="#222" >{course.CourseName} ({course.CourseDuration}). course complition date : June 2022 </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{fontSize:"0.9rem"}} component="p" color="#222">
                    About course  : {course.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </div>
            ))
        }
       </div>
    </Grid>
  )
}
