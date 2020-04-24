import React from 'react';
import mob from '../model/mob';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    but: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: theme.palette.text.secondary,
    },
  }));

export default function Mobnet(props){

    mob();
    const classes = useStyles();

    return(
        <div>
        <Box>
            <Typography component="div" >

                <input type="file" id="defimg" accept="image/*" />
                <br />
                <Button id="def" variant="contained" className={classes.but}>
                    Predict
                </Button>
                <p id="defconsole"></p>

            </Typography>
        </Box>
        </div>
    );
}