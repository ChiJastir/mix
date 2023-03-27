import React from 'react';
import classes from './buttonLink.module.css'

const ButtonLink = ({href, className, children}) => {
    return (
        <a href={href} className={[classes.link, className].join(' ')}>
            {children}
        </a>
    );
};

export default ButtonLink;