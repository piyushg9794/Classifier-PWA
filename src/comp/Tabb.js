import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Mobnet from '../components/Mobnet';
import CustomClassifier from '../components/CustomClassifer';

const tuseStyles = makeStyles({
    root: {
      backgroundColor: 'white',
    },
  });

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    const tclasses = tuseStyles();

    return (
      <Typography
        className={tclasses.root}
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={6}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Mobilenet Classifier" {...a11yProps(0)} />
        <Tab label="Custom Classifier" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Mobnet />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CustomClassifier />
      </TabPanel>
    </Paper>
  );
}
