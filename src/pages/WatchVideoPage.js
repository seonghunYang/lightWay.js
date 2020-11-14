import React from 'react';
import Grid from '@material-ui/core/Grid';
import VideoList from '../components/VideoList'


export default function WatchVideoPage() {
  return (
      <>
      <div>
            <Grid item sm={4}>
                <VideoList/>
            </Grid>
            <Grid item sm={8}>
                <p/>Youtube
            </Grid>
        </div>
    </>
  );
}