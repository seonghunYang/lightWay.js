import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  color: {
    backgroundColor: "#283593",
  },
  buttons: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),
  },
  logo: {
    width: "auto",
  }
  }
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.color}>
        <Toolbar>
          <div className={classes.buttons}>
            <Button href="/" color="inherit">
              lightWay
              {/* <img src={logo} className={classes.logo} /> */}
            </Button>
            <Button href="/" color="inherit" >
              Courses
            </Button>
            <Button href="/" color="inherit">
              FAQ
            </Button>
            <Button href="/" color="inherit">
              Roadmap
            </Button>
          </div>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Join</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}