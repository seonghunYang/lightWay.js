import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useSelector, useDispatch } from 'react-redux';
import {createComment} from '../actions/index';

const useStyles = makeStyles((theme) => ({
  inputSize: {
    width: "100%",
    borderWidth: "0",
    borderRadius: "15px",
    height: "200px",
    fontSize: "25px",
    boxShadow: "4px 8px 4px 0 rgba(0, 0, 0, 0.2), 0 5px 15px 0 rgba(0, 0, 0, 0.19)",
  },
  buttonPosition: {
    float: "right",
    borderRadius: "15px",
    margin: theme.spacing(2),
    boxShadow: "4px 8px 4px 0 rgba(0, 0, 0, 0.2), 0 5px 15px 0 rgba(0, 0, 0, 0.19)"
  },

}));

export default function WriteInput() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const commentInput = document.getElementById("comment");
    let comment = commentInput.value;
    commentInput.value = "";
    dispatch(createComment(comment));
  };

  return (
    <form>
      <div>
        <input id="comment" placeholder="코멘트를 남겨주세요!" className={classes.inputSize}></input>
        <Button variant="contained" color="primary" className={classes.buttonPosition}
          onClick={handleChange}
        >
          Post Comment
        </Button>
      </div>
    </form>
  );
}