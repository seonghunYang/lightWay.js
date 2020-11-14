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
    padding: theme.spacing(3),
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
  
}));

const CourseItem =({course}) => {
    const classes = useStyles();
    const {id, name, teacher} = course;
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
                image="https://source.unsplash.com/random"
                title="Contemplative Reptile"
                />
                <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h2" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
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
    const [selectedCourses, setSelectedCourses] = useState(courses);
    const filter = (courses) =>{
      if (selectedGrade == null) {
        return courses;
      } else {
        const filterData = courses.filter(course => (course.grade == selectedGrade))
        return filterData;
      }
    };
    const filterData = filter(courses);
    if (selectedGrade && selectedCourses[0].grade != selectedGrade ){
      setSelectedCourses(filterData);
    }
    return(
        <Grid container spacing={3}>
            {selectedCourses && selectedCourses.map((course) => (<CourseItem key={course.id} course={course}/>))}
        </Grid>
    )

}

export default CardPage;