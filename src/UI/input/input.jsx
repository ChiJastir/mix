import React from 'react';
import classes from './input.module.css'

const Input = (props) => {
    return (
        <input
            {...props}
            className={classes.input + ' ' + props.className}
        >
        </input>
    );
};

export default Input;