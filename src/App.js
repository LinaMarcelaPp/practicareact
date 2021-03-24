import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.backgroundColor = '#000000'
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Typography component="div" style={{backgroundColor: '#cfe8fc', height: '75vh', width: '75vh' }}>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>0</Paper>
            </Grid>
            <div className={classes.paper}>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary">
                  7
</Button>
              </Grid>
            </div>
            <div className={classes.paper}>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary">
                  8
</Button>
              </Grid>
            </div>
            <div className={classes.paper}>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary">
                  9
</Button>
              </Grid>
            </div>
            <div className={classes.paper}>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="secondary">
                  X
</Button>
              </Grid>
            </div>
          </Grid>

          <Grid container spacing={3}>
          <div className={classes.paper}>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary">
                  4
</Button>
              </Grid>
            </div>

            <div className={classes.paper}>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary">
                  5
</Button>
              </Grid>
            </div>

            <div className={classes.paper}>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary">
                  6
</Button>
              </Grid>
            </div>

            <div className={classes.paper}>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="secondary">
                  -
</Button>
              </Grid>
            </div>
          </Grid>

          <Grid container spacing={3}>
          <div className={classes.paper}>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary">
                  1
</Button>
              </Grid>
            </div>

            <div className={classes.paper}>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary">
                  2
</Button>
              </Grid>
            </div>

            <div className={classes.paper}>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary">
                  3
</Button>
              </Grid>
            </div>

            <div className={classes.paper}>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="secondary">
                  +
</Button>
              </Grid>
            </div>
          </Grid>
          <Grid container spacing={3}>
          <div className={classes.paper}>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary">
                  .
</Button>
              </Grid>
            </div>

            <div className={classes.paper}>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary">
                  0
</Button>
              </Grid>
            </div>

            <div className={classes.paper}>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary">
                  =
</Button>
              </Grid>
            </div>

            <div className={classes.paper}>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="secondary">
                  /
</Button>
              </Grid>
            </div>
          </Grid>
        </Typography>
      </Container>
    </div>
  );
}