import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles.js';
import maturski from '../../images/maturski.png';

const Navbar = () => {
    const classes = useStyles();


    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
          <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h3" align="center">Maturski</Typography>
            <img className={classes.image} src={maturski} alt="icon" height="50" />
          </div>
        </AppBar>
      );
    };

export default Navbar;