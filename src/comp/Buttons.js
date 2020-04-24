import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

export default function Buttons (props) {
  
      return(

        <React.Fragment >
            <IconButton  id={props.id} color="primary">
              <Icon>
                add_circle
              </Icon>
            </IconButton>
        </React.Fragment>

      );

}