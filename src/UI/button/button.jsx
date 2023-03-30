import React from 'react';
import classes from './button.module.css'

const Button = ({onClick, className, children}) => {
    return (
        <button onClick={onClick} className={[classes.button, className].join(' ')}>
            {children}
        </button>
    );
};

export default Button;