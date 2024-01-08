import React, {useState} from 'react';
import classes from "./burgerNavigation.module.scss";
import burger from "../../assets/burger.svg";
import MobilePanel from "../../UI/mobilePanel/mobilePanel";
import Navigation from "../navigation/navigation";

const BurgerNavigation = () => {
    const [visible, setVisible] = useState(false)

    return (
        <div>
            <button onClick={() => setVisible(true)} className={classes.burgerButton}>
                <img src={burger} alt="menu"/>
            </button>
            <MobilePanel visible={visible} setVisible={setVisible} isHorizontal={false}>
                <Navigation className={classes.navigation}/>
            </MobilePanel>
        </div>
    );
};

export default BurgerNavigation;