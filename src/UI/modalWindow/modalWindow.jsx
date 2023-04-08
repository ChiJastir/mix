import React from 'react';
import s from './modalWindow.module.css'

const ModalWindow = ({children, visible, setVisible, className}) => {
    const classes = [s.window]
    if (visible)
        classes.push(s.active)

    return (
        <div className={[className, classes.join(' ')].join(' ')} onClick={() => setVisible(false)}>
            <div className={s.panel} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;