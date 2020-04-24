import React from 'react';
import custom_model from '../model/custom_model';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Grids from '../comp/Grids';
import Cards from '../comp/Cards';

export default function CustomClassifier() {

    custom_model();
  
    return (
      <div>        
        <Box color="text.primary">

          <Grid container spacing={2}>
            <Grids inid='ima' butid='a'/>
            <Grids inid='imb' butid='b'/>
            <Grids inid='imc' butid='c'/>
          </Grid>

          <center>
            <Cards inid="impred" butid="pred" console="custom_console" />
          </center>

        </Box>    
      </div>
    );
  
    
  }