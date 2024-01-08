import React from 'react';
import classes from './input.module.scss'
import search from '../../assets/search.svg'

const Input = ({className, register, ...props}) => {
    return (
        <label className={classes.label}>
            <img className={classes.img} src={search} alt="search"/>
            <input
                {...props}
                {...register}
                className={[classes.input, className].join(' ')}
            >
            </input>
        </label>
    );
};

export default Input;