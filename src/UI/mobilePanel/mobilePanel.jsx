import React from 'react';
import classes from './mobilePanel.module.scss'
import Button from "../button/button";

const MobilePanel = ({children, visible, setVisible, isHorizontal}) => {
    const s = [classes.panel]

    if (visible) {
        s.push(classes.active)
    }

    return (
        <div className={[isHorizontal ? classes.left : classes.top, s.join(' ')].join(' ')}>
            <div className={classes.container}>
                {children}
                <Button onClick={() => setVisible(false)}>Закрыть</Button>
            </div>
        </div>
    );
};

export default MobilePanel;