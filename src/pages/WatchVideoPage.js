import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import WriteInput from '../components/WriteInput';
import CommentCard from '../components/CommentCard';
import {selectVideos} from '../actions/index';
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    videos: {
      borderRadius: "15px",
      boxShadow: "4px 8px 4px 0 rgba(0, 0, 0, 0.2), 0 5px 15px 0 rgba(0, 0, 0, 0.19)"
    },
    displayFont: {
      margin: theme.spacing(2),
      display: "flex",
      fontWeight: "bold",
      fontSize: 40
    },
    root: {
      width: '100%',
      height: 400,
      maxWidth: 300,
      backgroundColor: theme.palette.background.paper,
    },

    list: {
      padding: theme.spacing(3),
    },

    listFont: {
      fontSize: 20,
      fontWeight: "bold"
    },
    listSize: {
      height: "4.5em"
    }
}));


export default function WatchVideoPage() {
  const {id} = useParams();
  const classes = useStyles();
  const courses = useSelector(state => state.courses)
  const comments = useSelector(state => state.comments)
  const dispatch = useDispatch();

  const selectedVideos = useSelector(state => state.selectedVideos)
  console.log(selectedVideos)
  console.log(courses)
  let selectVideo = courses[id].videos[selectedVideos];
  console.log(selectVideo)
  return (
      <>
        <Container maxWidth="lg" >
          <div className={classes.displayFont}>{selectVideo.name}</div>
          <Grid container className ={classes.list} spacing={6} >
            <Grid item sm={3}>
                <VideoList id={id}/>
            </Grid>
            <Grid item sm={9}>
              <iframe className={classes.videos} width="800" height="600" src={`https://www.youtube.com/embed/${selectVideo.v_link}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Grid>
            <Grid item sm={3}><div></div></Grid>
            <Grid item sm={8}>
              <WriteInput></WriteInput>
            </Grid>
            <Grid item sm={1}>
              <div></div>
            </Grid>
            <Grid item sm={3}><div></div></Grid>
            <Grid item sm={8}>
              {comments.map((comment) => (<CommentCard comment={comment} />))}
            </Grid>
            <Grid item sm={1}></Grid>
          </Grid>
        </Container>
    </>
  );
}

const VideoItem = ({video}) => {
  const {v_id, v_name} = video; 
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(selectVideos(v_id));
  };
  return(
    <>
    <ListItem className={classes.listSize} button onClick={handleClick}> 
        <ListItemText >
          <span className={classes.listFont}>#{v_id}. {v_name}</span>
        </ListItemText> 
    </ListItem>
      <Divider variant="middle" />
    </>
  )

}

const VideoList = ({id}) => {
  console.log(id)
  const courses = useSelector(state => state.courses)
  const classes = useStyles();
  console.log(courses[id].videos);
  const videos = courses[id].videos;

  return(
  <List className={classes.videos}>
      {videos.map((video) => (<VideoItem key={video.v_id} video={video}/>))}
  </List>
  )
}

