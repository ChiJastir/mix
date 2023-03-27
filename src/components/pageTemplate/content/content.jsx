import React from 'react';
import classes from './content.module.css'

const Content = ({children, className}) => {
    return (
        <div className={[classes.content, className].join(' ')}>
            {children}
        </div>
    );
};

export default Content;