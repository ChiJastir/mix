import React from 'react';
import classes from './input.module.css'
import search from '../../img/search.svg'

const Input = (props) => {
    return (
        <label className={classes.label}>
            <img className={classes.img} src={search} alt="search"/>
            <input
                {...props}
                className={classes.input + ' ' + props.className}
            >
            </input>
        </label>
    );
};

export default Input;