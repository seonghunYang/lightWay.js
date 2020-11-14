import React from 'react';
import Grid from '@material-ui/core/Grid';

import { useParams } from 'react-router-dom';
import VideoList from '../components/VideoList'


export default function WatchVideoPage() {
  const {ticker} = useParams();
  console.log(ticker);
  return (

      <>
      <div>
            <Grid item sm={4}>
                <VideoList ticker = {ticker}/>
            </Grid>
            <Grid item sm={8}>
                <p/>Youtube
            </Grid>
        </div>
    </>
  );
}