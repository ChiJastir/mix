import React from 'react';
import classes from './loader.module.css'
import logo from '../../img/logo.svg'

const Loader = () => {
    return (
        <div className={classes.loader}>
            <img src={logo} alt="logo"/>
        </div>
    );
};

export default Loader;