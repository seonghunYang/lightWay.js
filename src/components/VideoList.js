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
    <ListItem button>
        
        <ListItemText primary={v_name} />
    </ListItem>

}

const VideoList = (props) => {
    ticker = props.ticker;
    console.log(ticker);
    const videos = useSelector(state => state.courses[ticker].videos)
    console.log(videos);
    const [selectedVideo, setSelectedVideo] = useState[videos[0]]
    if(!videos){return(<div>Loading</div>)}
    return(
    <List>
        {videos.map((video) => (<VideoItem key={video.v_id} video={video}/>))}
    </List>
     )
}

export default VideoList;

