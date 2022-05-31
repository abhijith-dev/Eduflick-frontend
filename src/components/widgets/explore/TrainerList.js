import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import StudentNavbar from '../navigation/StudentNavbar'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { getTrainers, subscribeTrainer } from '../../../Interceptors/student';
import Loading from '../../widgets/loading/Loading';

export default function TrainerList() {

  const [trainers,setTrainers] = React.useState([])
  const [loading,setLoading] = React.useState(false)
  React.useEffect(()=>{
    setLoading(true)
    async function fetch(){
      let data =  await getTrainers()
      setTrainers(data)
      setLoading(false)
    }
    fetch()
  })
  const subscribe = async(event)=>{
    document.querySelector(`#${event.target.id}`).innerText = "subscribed"
    document.querySelector(`#${event.target.id}`).style.backgroundColor = "grey"
    let id =  (event.target.id).toString().split("-")[1];
    await subscribeTrainer(id)
  }
  return (
    <>
     <StudentNavbar />
     {
       loading?(<Loading/>):null
     }
     <Grid style={{marginTop:"5rem"}}>
     <Paper
     style={{marginLeft:"27rem"}}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Trainer"
        inputProps={{ 'aria-label': 'Search Trainer' }}
      />
      <IconButton  sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    <Paper style={{width:"80%",marginLeft:"10rem",marginTop:"3rem"}}>
        <Grid>
           {
               trainers.map(trainer =>(
                   <>
                   {
                       trainer.isSubscribed ? (
                        <div>
                            <Grid style={{textAlign:"center"}} container direction={"row"} gap={4}>
                        <Grid item>
                        <Typography style={{color:"#222",marginTop:"20px",marginLeft:"20rem"}}>{trainer.name} - {trainer.specialization1}</Typography>
                        </Grid>
                        <Grid item> 
                        <Button
                            variant="contained"
                            sx={{ mt: 2, mb: 2, ml: 2 }}
                            size="small"
                            id = {`id-${trainer.id}`}
                            onClick={subscribe}
                            style={{ backgroundColor: "rgb(107, 13, 107)", color: "#fff" }}
                        >
                            subscribe
                        </Button>
                        </Grid>
                      </Grid>
                      <hr></hr>
                        </div>
                       ):null
                   }
                   </>
               ))
           }
        </Grid>
    </Paper>
     </Grid>
    </>
  )
}
