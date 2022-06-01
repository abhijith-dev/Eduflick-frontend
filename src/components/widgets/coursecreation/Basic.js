import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function Basic({setCourseName,setCourseDesc,setCourseDuration,setCourseTopics}) {
  return (
    <React.Fragment>
      <Typography style={{color:"#222"}} variant="h6" gutterBottom>
        Basic Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="courseName"
            name="coursename"
            label="Course Name"
            fullWidth
            onChange={e=>setCourseName(e.target.value)}
            autoComplete="off"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="description"
            name="coursedescription"
            label="Course Description"
            onChange={e=>setCourseDesc(e.target.value)}
            fullWidth
            autoComplete="description"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="courseduration"
            name="courseduration"
            label="Course Duration"
            onChange={e=>setCourseDuration(e.target.value)}
            fullWidth
            autoComplete="duration"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="topics"
            name="topics"
            label="Course Covered Topics"
            onChange={e=>setCourseTopics(e.target.value)}
            fullWidth
            autoComplete="duration"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}