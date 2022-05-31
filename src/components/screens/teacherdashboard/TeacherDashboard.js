import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Basic from '../../widgets/coursecreation/Basic';
import VideoDetails from '../../widgets/coursecreation/Videodetails';
import Questions from '../../widgets/coursecreation/Questions';
import TeacherNavbar from '../../widgets/navigation/TeacherNavbar';
import { addCourseBasic, addCourseQuestions, addCourseVideo } from '../../../Interceptors/teacher';


const steps = ['Add course details', 'add video and thumbnail', 'add questions'];



const theme = createTheme();

export default function TeacherDashboard() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [courseName,setCourseName] = React.useState('')
  const [courseDesc,setCourseDesc] = React.useState('')
  const [courseDuration,setCourseDuration] = React.useState('')

  const [file,setFile] = React.useState('')
  const [thumbnail,setThumbnail] = React.useState('')

  const [questionsSet,setQuestionsSet] = React.useState([])

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Basic setCourseName={setCourseName} setCourseDesc={setCourseDesc}  setCourseDuration={setCourseDuration} />;
      case 1:
        return <VideoDetails setFile={setFile} setThumbnail={setThumbnail} />;
      case 2:
        return <Questions setQuestionsSet={setQuestionsSet} />;
      default:
        throw new Error('Unknown step');
    }
  }
  const handleNext = async() => {
    if(activeStep === 0){
      let body = {
        CourseName:courseName,
        Description:courseDesc,
        CourseDuration:courseDuration
      }
      let response = await addCourseBasic(body)
      if(!response.error){
        setActiveStep(activeStep + 1);
      }
    }
    else if(activeStep === 1){
      let data = new FormData()
      data.append('thumbnail',thumbnail)
      data.append('file',file)
      let response = await addCourseVideo(data)
      if(!response.error){
        setActiveStep(activeStep + 1);
      }
    }
    else if(activeStep === 2){
      let response = await addCourseQuestions(questionsSet)
      if(!response.error){
        setActiveStep(activeStep + 1);
      }
    }
    else{
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <TeacherNavbar />
      <Container  style={{backgroundColor:"#222",marginTop:"6rem"}}  component="main" maxWidth="sm" sx={{ mb: 4}}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h2" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper style={{color:"purple"}}  activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography color={"#222"} variant="h5" gutterBottom>
                  course uploaded successfully
                </Typography>
                <Typography color={"#222"} variant="subtitle1">
                  now course available in public platform. Any student can have 
                  access to this.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1,color:"purple"}}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1,backgroundColor:"purple"}}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>  
      </Container>
    </ThemeProvider>
  );
}