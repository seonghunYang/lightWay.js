import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  margin: {margin: "1em"},
}));

export default function GradeFilterChip({grade, clickedChip}) {
  const classes = useStyles();

  const gradeToLabel = {1: "초등학교", 2: "중학교", 3: "고등학교"}

  const handleClick = () => {
    clickedChip(grade);
  }
  return (
    <Chip
      label={gradeToLabel[grade]}
      clickable
      onClick={handleClick}
      className={classes.margin}
    />
  );
}