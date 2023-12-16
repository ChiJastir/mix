import React from 'react';
import classes from './mobilePanelLeft.module.scss'
import Button from "../button/button";

const MobilePanelLeft = ({children, visible, setVisible}) => {
    const s = [classes.panel]
    if (visible)
        s.push(classes.active)

    return (
        <div className={[classes.panel, s.join(' ')].join(' ')}>
            <div className={classes.container}>
                {children}
                <Button onClick={() => setVisible(false)}>Закрыть</Button>
            </div>
        </div>
    );
};

export default MobilePanelLeft;