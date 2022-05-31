import { Grid } from '@mui/material'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StudentNavbar from '../navigation/StudentNavbar';
import { Button } from '@mui/material';
import DownloadPDF from '../../../functions/downloadCertificate';
import { StudentCourses } from '../../../Interceptors/student';

export default function StudentCourse() {
  const [courses,setCourses] = React.useState([])
  React.useEffect(()=>{
     async function fetch(){
        let data  = await StudentCourses()
        setCourses(data)
     }
     fetch()
  },[])
  const downloadCertificate = (name,date)=>{
    DownloadPDF(name,date)
  }
  return (
    <Grid>
        <StudentNavbar />
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
                  <Typography color="#222" >{course.courseName} ({course.courseDuration}). course complition date : June 2022  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{fontSize:"0.9rem"}} component="p" color="#222">
                    About course  : {course.description}
                  </Typography>
                            <Button
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                style={{ backgroundColor: "rgb(107, 13, 107)", color: "#fff" }}
                                onClick={()=>{downloadCertificate(course.CourseName,'june 2022')}}
                            >
                                Download Certificate
                            </Button>
                </AccordionDetails>
              </Accordion>
              </div>
            ))
        }
       </div>
    </Grid>
  )
}
