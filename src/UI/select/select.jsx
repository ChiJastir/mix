import React from 'react';
import classes from './select.module.scss'

const Select = ({options, value, sortMovies, className, heading}) => {
    return (
        <select
            value={value}
            onChange={event => sortMovies(event.target.value)}
            className={[classes.select, className].join(' ')}
        >
            <option disabled>{heading}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )

            }
        </select>
    );
};

export default Select;