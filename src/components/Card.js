import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme)=>({
  card_coures: {
    width: 300,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '10%',
    width: 300,
    height: 200,
  },
  cardContent: {
    flexGrow: 1,
  },
  font: {
      fontWeight: "bold"
  }
  
}));

const CourseItem =({course}) => {
    const classes = useStyles();
    const {id, name, teacher, img} = course;
    return(
        <Grid item key={id} sm={4}>
            <Card className={classes.card_coures}>
            <CardActionArea
            component = {Link}
            to={`/watch/${course.id}`}>
                <CardMedia
                className={classes.cardMedia}
                component="img"
                alt="Contemplative Reptile"
                image={img}
                title="Contemplative Reptile"
                />
                <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h6" component="h6" className={classes.font} > 
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="h6">
                    강사: {teacher}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </Grid>
    )
}

const CardPage = ({selectedGrade}) => {
    const classes = useStyles();
    const courses = useSelector(state => state.courses)
    const selectedCourses = useSelector(state => state.selectedCourses)
    
    return(
        <Grid container spacing={3}>
            {selectedCourses ? selectedCourses.map((course) => (<CourseItem key={course.id} course={course}/>)) : courses.map((course) => (<CourseItem key={course.id} course={course}/>))}
        </Grid>
    )

}

export default CardPage;