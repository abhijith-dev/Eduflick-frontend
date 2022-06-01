import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { TextField,Button } from '@mui/material';

export default function Questions({setQuestionsSet}) {
  const [count,setCount] = React.useState(1)
  const [question,setQuestion] = React.useState('')
  const [opA,setOpA] = React.useState('')
  const [opB,setOpB] = React.useState('')
  const [opC,setOpC] = React.useState('')
  const [opD,setOpD] = React.useState('')
  const [ans,setAns] = React.useState('')

  const pushQuestion = ()=>{
      let obj = {
        id:count,
        question:question,
        option1:opA,
        option2:opB,
        option3:opC,
        option4:opD,
        answer:ans
      }
      setQuestionsSet(prev=>[...prev,obj])
      setCount(prev=>prev+1)
      setQuestion('')
      setOpA('')
      setOpB('')
      setOpC('')
      setOpD('')
      setAns('')
  }
  return (
    <React.Fragment>
      <Typography color="#222" variant="h6" gutterBottom>
        Add Questions
      </Typography>
      <Grid mt={2}  container direction={"column"} spacing={3}>
        <Typography color={'#222'} >Question {count}</Typography> 
        <Grid item xs={12} >
          <TextField
            required
            id="question"
            value={question}
            name="question"
            label="Question"
            fullWidth
            onChange={e=>setQuestion(e.target.value)}
            autoComplete="off"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="op1"
            name="op1"
            value={opA}
            label="Option 1"
            onChange={e=>setOpA(e.target.value)}
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="op2"
            name="op2"
            value={opB}
            onChange={e=>setOpB(e.target.value)}
            label="Option 2"
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="op3"
            name="op3"
            label="Option 3"
            value={opC}
            onChange={e=>setOpC(e.target.value)}
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="op4"
            name="op4"
            label="Option 4"
            value={opD}
            onChange={e=>setOpD(e.target.value)}
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="ans"
            value={ans}
            name="ans"
            label="Answer"
            onChange={e=>setAns(e.target.value)}
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>  
        <Grid item xs={4}>
        <Button
          variant="contained"
          onClick={pushQuestion}
          sx={{ mt: 3, ml: 1, backgroundColor: "purple" }}
        >
          Add question
        </Button>
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}