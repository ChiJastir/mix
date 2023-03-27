import React from 'react';
import classes from './heading.module.css'

const Heading = ({className, children}) => {
    return (
        <h1 className={[classes.heading, className].join(' ')}>
            {children}
        </h1>
    );
};

export default Heading;