import React from 'react'
import { Grid, Button,Radio,RadioGroup,FormControlLabel,Typography } from '@mui/material'
import './questionpaper.css'
import { getQuestions,submitQuestions } from '../../../Interceptors/student';
export default function QuestionsPaper() {
  const [questions,setQuestions] = React.useState([])
  React.useEffect(()=>{
    async function fetch(){
      let url = window.location.pathname;
     let id = url.substring(url.lastIndexOf('/') + 1);
      let data = await getQuestions(id)
      setQuestions(data)
    }
    fetch()
  },[])
  const answerCheck = async(e)=>{
     e.preventDefault()
     let answerSheet = {}
     let correctAnswerSheet = {}
     let correctAnswerCount = 0
     const data = new FormData(e.currentTarget)
     for(let i =0;i<questions.length;i++){
       answerSheet[i+1] = data.get(`q-${i+1}`)
       correctAnswerSheet[i+1] = questions[i].answer
     }
     for(let i =0;i<questions.length;i++){
       if(answerSheet[i+1] === correctAnswerSheet[i+1] ){
         correctAnswerCount++
       }
    }
    let url = window.location.pathname;
    let id = url.substring(url.lastIndexOf('/') + 1);
    await submitQuestions(correctAnswerCount,id) 
    //window.location.href="/"
  }
  return (
    <>
     <Grid container m={5} direction={"column"} sx={{width:"95%",height:"100%",backgroundColor:"#fff",borderRadius:'6px'}}> 
        <h1 style={{textAlign:"center",color:'purple'}}>React front-end development</h1> 
        <form onSubmit={answerCheck}>
        {
           questions.map((qn,index)=>(
            <Grid key={index+1} item m={5} mt={2} >
              <Typography gutterBottom variant="body1" component="div">
                {index+1}. {qn.question}
              </Typography> 
               <RadioGroup
                 aria-labelledby="demo-form-control-label-placement"
                 name={`q-${index+1}`}
                 defaultValue="top"
               >
                 <FormControlLabel value={qn.option1} control={<Radio sx={{
                   color: 'purple',
                   '&.Mui-checked': {
                     color: 'purple',
                   },
                 }} />} label={qn.option1} />
                 <FormControlLabel value={qn.option2} control={<Radio sx={{
                   color: 'purple',
                   '&.Mui-checked': {
                     color: 'purple',
                   },
                 }} />} label={qn.option2} />
                 <FormControlLabel value={qn.option3} control={<Radio sx={{
                   color: 'purple',
                   '&.Mui-checked': {
                     color: 'purple',
                   },
                 }} />} label={qn.option3} />
                 <FormControlLabel value={qn.option4} control={<Radio sx={{
                   color: 'purple',
                   '&.Mui-checked': {
                     color: 'purple',
                   },
                 }} />} label={qn.option4} />
               </RadioGroup>
               <hr></hr>
            </Grid>    
           ))
         }
         <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, ml:5 }}
              style={{backgroundColor:"rgb(107, 13, 107)",color:"#fff"}}
            >
             Submit
            </Button>
        </form>          
     </Grid>
    </>
  )
}
