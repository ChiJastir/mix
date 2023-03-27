import React from 'react';
import classes from './button.module.css'

const Button = ({onClick, className, children, search}) => {
    return (
        <button onClick={() => {onClick(search)}} className={[classes.button, className].join(' ')}>
            {children}
        </button>
    );
};

export default Button;