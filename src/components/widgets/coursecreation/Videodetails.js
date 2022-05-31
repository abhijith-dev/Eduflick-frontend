import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function VideoDetails({setFile,setThumbnail}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        upload video
      </Typography>
      <Grid container direction={"column"} spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            id="video"
            label="upload video"
            name="file"
            onChange={(e)=>{setFile(e.target.files[0])}}
            type={"file"}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="thumbnail"
            name="thumbnail"
            label="upload image"
            type={"file"}
            onChange={(e)=>{setThumbnail(e.target.files[0])}}
            fullWidth
            variant="standard"
          />
        </Grid>      
      </Grid>
    </React.Fragment>
  );
}