import React from 'react'
import { Grid, Button,Radio,RadioGroup,FormControlLabel,Typography } from '@mui/material'
import './questionpaper.css'
const questions =[
  {
    question:'In which sector ReactJS used?',
    o1:'back-end',
    o2:'database',
    o3:'networking',
    o4:'front-end',
    ans:'front-end'
  },
  {
    question:'which language used in ReactJS?',
    o1:'java',
    o2:'javascript',
    o3:'python',
    o4:'c++',
    ans:'javascript'
  },
  {
    question:'who introduced ReactJS?',
    o1:'facebook',
    o2:'google',
    o3:'microsoft',
    o4:'IBM',
    ans:'facebook'
  }
]
export default function QuestionsPaper() {
  const answerCheck = async(e)=>{
     e.preventDefault()
     let answerSheet = {}
     let correctAnswerSheet = {}
     let correctAnswerCount = 0
     const data = new FormData(e.currentTarget)
     for(let i =0;i<questions.length;i++){
       answerSheet[i+1] = data.get(`q-${i+1}`)
       correctAnswerSheet[i+1] = questions[i].ans
     }
     for(let i =0;i<questions.length;i++){
       if(answerSheet[i+1] === correctAnswerSheet[i+1] ){
         correctAnswerCount++
       }
    }
    alert(`Score ${correctAnswerCount}/${questions.length}`)
    window.location.href="/"
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
                 <FormControlLabel value={qn.o1} control={<Radio sx={{
                   color: 'purple',
                   '&.Mui-checked': {
                     color: 'purple',
                   },
                 }} />} label={qn.o1} />
                 <FormControlLabel value={qn.o2} control={<Radio sx={{
                   color: 'purple',
                   '&.Mui-checked': {
                     color: 'purple',
                   },
                 }} />} label={qn.o2} />
                 <FormControlLabel value={qn.o3} control={<Radio sx={{
                   color: 'purple',
                   '&.Mui-checked': {
                     color: 'purple',
                   },
                 }} />} label={qn.o3} />
                 <FormControlLabel value={qn.o4} control={<Radio sx={{
                   color: 'purple',
                   '&.Mui-checked': {
                     color: 'purple',
                   },
                 }} />} label={qn.o4} />
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
