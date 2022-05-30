import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Stack } from '@mui/material';
import {Timer} from '@mui/icons-material';

export default function MediaCard({course,videoSelection}) {
  return (
    <Card onClick={()=>{videoSelection(course.id)}} className='video-card' mt={5} sx={{ width: "95%",backgroundColor:"#fff"}}>
    <CardActionArea>
      <Grid container xs={12} direction={"row"}>
        <Grid item xs={4}>
          <CardMedia
        component="img"
        height="245"
        image={course.thumbnail}
        alt="green iguana"
      />
        </Grid>
      <Grid item xs={8}>
      <CardContent className='video-content'>
        <Typography gutterBottom variant="h5" component="div">
          {course.name}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          - {course.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {course.description}
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary">
         upload time :{course.updatedAt}
        </Typography>
        <br></br>
         <Stack direction={"row"}>
         <Timer/>
         <Typography variant="body2" style={{marginTop:"0.2rem"}} color="text.secondary">&nbsp;&nbsp;01:00:24</Typography>
         </Stack>
      </CardContent>
      </Grid>
      </Grid>
      </CardActionArea> 
    </Card>
  );
}