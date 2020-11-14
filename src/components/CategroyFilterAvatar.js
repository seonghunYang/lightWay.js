import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import SecurityIcon from '@material-ui/icons/Security';
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';
import NearMeIcon from '@material-ui/icons/NearMe';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    backgroundColor: "#283593",
    margin: "1em"
  },
  display: {
    display: "flex",
  }
}));

export default function CategoryFilterAvatar({category}) {
  const classes = useStyles();
  const categorys = {
    sex: [<FavoriteBorderIcon fontSize="large" />, "성교육"], 
    etiquett: [<EmojiPeopleIcon fontSize="large" />, "예절교육"],
    safety: [<SecurityIcon fontSize="large" />, "안전교육"],
    smoke: [<SmokeFreeIcon fontSize="large" />, "흡연 교육"],
    roadmap: [<NearMeIcon fontSize="large" />, "진로 상담"],
    heart: [<ChildCareIcon fontSize="large" />, "심리 상담"]
  }
  return (
      <Grid direction="column" alignItems="center" className={classes.display}>
        <Avatar className={classes.large} >
          {categorys[category][0]}
        </Avatar>
        <Chip label={categorys[category][1]} variant="outlined" />
      </Grid>
  );
}