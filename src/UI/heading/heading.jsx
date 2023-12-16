import React from 'react';
import classes from './heading.module.scss'

const Heading = ({className, children}) => {
    return (
        <h1 className={[classes.heading, className].join(' ')}>
            {children}
        </h1>
    );
};

export default Heading;