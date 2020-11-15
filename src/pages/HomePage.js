import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import CardPage from '../components/Card';
import GradeFilterChip from '../components/GradeFilterChip';
import CategoryFilterAvatar from '../components/CategroyFilterAvatar';
import { GridListTileBar } from '@material-ui/core';
import { selectCourses } from '../actions/index';

const useStyles = makeStyles((theme) => ({
    cardGrid:{
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    topGrid: {
      
    },
    displayFont: {
      display: "flex",
      fontWeight: "bold",
      margin: "1em",
      fontSize: 20
    },
    display: {
      display: "flex",
    }
}))

export default function Home(){
    const classes = useStyles();
    const courses = useSelector(state => state.courses)
    const selectedCourses = useSelector(state => state.selectedCourses)
    const dispatch = useDispatch();

    const clickedChip = (grade) => {
      let filterData = courses.filter(course => (course.grade == grade));
      dispatch(selectCourses(filterData));
    }

    const clickedAvatar = (category) => {
      let filterData = courses.filter(course => (course.category == category));
      dispatch(selectCourses(filterData));
    }

    return(
        <Container maxWidth="lg" >
          <Grid container spacing={3} maxWidth="md" className={classes.topGrid}>
            <Grid item direction="column" justify="center" sm={5} className={classes.display}>
              <Grid item  justify="center" className={classes.displayFont}>Filter by Level</Grid>
              <Grid item  justify="center" className={classes.display}>
                <GradeFilterChip grade={1} clickedChip={clickedChip} />
                <GradeFilterChip grade={2} clickedChip={clickedChip} />
                <GradeFilterChip grade={3} clickedChip={clickedChip} />
              </Grid>
            </Grid>
            <Divider flexItem orientation="vertical" variant="middle" sm={1} />
            <Grid item sm={6} >
              <Grid item  justify="center" className={classes.displayFont}>Filter by Category</Grid>
              <Grid container  alignItems="center" className={classes.display}>
                <Grid item sm={3}>
                  <CategoryFilterAvatar category={"sex"} clickedAvatar={clickedAvatar} />
                </Grid>
                <Grid item sm={3}>
                  <CategoryFilterAvatar category={"etiquett"} clickedAvatar={clickedAvatar} />
                </Grid>
                <Grid item sm={3}>
                  <CategoryFilterAvatar category={"safety"} clickedAvatar={clickedAvatar} />
                </Grid>
                <Grid item sm={3}>
                  <CategoryFilterAvatar category={"smoke"} clickedAvatar={clickedAvatar} />
                </Grid>
                <Grid item sm={3}>
                  <CategoryFilterAvatar category={"roadmap"} clickedAvatar={clickedAvatar} />
                </Grid>
                <Grid item sm={3}>
                  <CategoryFilterAvatar category={"heart"} clickedAvatar={clickedAvatar} />
                </Grid>
              </Grid>
            </Grid>
            <CardPage />
          </Grid>
        </Container>
    )

}

