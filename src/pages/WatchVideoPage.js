import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import VideoList from '../components/VideoList'

const useStyles = makeStyles((theme) => ({
    list
  
}));

export default function WatchVideoPage() {
  const {id} = useParams();
  console.log(id);
  return (
      <>
      <div>
          <Grid container spacing = {3}>
            <Grid item sm={4}>
                <VideoList id={id}/>
            </Grid>
            <Grid item sm={8}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/6IVg-FCCEnA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Grid>
          </Grid>
        </div>
    </>
  );
}