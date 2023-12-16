import React from 'react';
import classes from './buttonLink.module.scss'

const ButtonLink = ({href, className, children}) => {
    return (
        <a href={href} className={[classes.link, className].join(' ')} target={"_blank"}>
            {children}
        </a>
    );
};

export default ButtonLink;