import React from 'react';
import Buttons from '../comp/Buttons';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper1: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    paper2: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: '#b4b9b9'
    },
  }));

export default function(props) {

    const classes = useStyles();
    
    return(
        <React.Fragment>
            <Grid item xs>
              <Paper className={classes.paper1}>
                <input type="file" id={props.inid} accept="image/*" />
                <Buttons id={props.butid} />
              </Paper>
            </Grid>
        </React.Fragment>
    );
}