import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));


const VideoItem = ({video}) => {
    const {v_id, v_name} = video; 
    return(
    <ListItem button>
        <ListItemText primary={v_name} />
    </ListItem>
    )

}

const VideoList = ({id}) => {
    console.log(id)
    const courses = useSelector(state => state.courses)
    console.log(courses[id].videos);
    const videos = courses[id].videos;
    // const [selectedVideo, setSelectedVideo] = useState[videos[0]]

    return(
    <List>
        {videos.map((video) => (<VideoItem key={video.v_id} video={video}/>))}
    </List>
    )
}

export default VideoList;

