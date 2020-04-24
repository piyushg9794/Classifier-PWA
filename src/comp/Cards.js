import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    but: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: theme.palette.text.secondary,
    },
  }));

export default function (props) {

    const classes = useStyles();

    return(

        <Card className={classes.root}>
            <CardActions>
                <input type="file" id={props.inid} accept="image/*" />
            </CardActions>
            <CardActions>
                <Button id={props.butid} variant="contained" className={classes.but}>
                    Predict
                </Button>
            </CardActions>
            <CardContent>
                <p id={props.console}></p>
            </CardContent>
        </Card>

    );
}