import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import CardPage from '../components/Card';
import GradeFilterChip from '../components/GradeFilterChip';
import CategoryFilterAvatar from '../components/CategroyFilterAvatar';
import { GridListTileBar } from '@material-ui/core';

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
    const [selectedGrade, setSelectedGrade] = useState(null);

    const clickedChip = (grade) => {
      setSelectedGrade(grade);
      console.log(selectedGrade);
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
              <Grid item  justify="center" className={classes.displayFont}>Filter by Tech</Grid>
              <Grid container  alignItems="center" className={classes.display}>
                <Grid item sm={3}>
                  <CategoryFilterAvatar category={"sex"}  />
                </Grid>
                <Grid item sm={3}>
                  <CategoryFilterAvatar category={"etiquett"} />
                </Grid>
                <Grid item sm={3}>
                  <CategoryFilterAvatar category={"safety"} />
                </Grid>
                <Grid item sm={3}>
                  <CategoryFilterAvatar category={"smoke"} />
                </Grid>
                <Grid item sm={3}>
                  <CategoryFilterAvatar category={"roadmap"} />
                </Grid>
                <Grid item sm={3}>
                  <CategoryFilterAvatar category={"heart"} />
                </Grid>
              </Grid>
            </Grid>
            <CardPage selectedGrade={selectedGrade} />
          </Grid>
        </Container>
    )

}

