import React, {useState} from 'react';
import classes from "./burgerNavigation.module.scss";
import burger from "../../assets/burger.svg";
import MobilePanel from "../../UI/mobilePanel/mobilePanel";
import Navigation from "../navigation/navigation";
import {useDispatch} from "react-redux";
import {setList} from "../../store/slices/moviesSlice";


const BurgerNavigation = () => {
    const [visible, setVisible] = useState(false)

    const dispatch = useDispatch()

    const onClickNavigation = () => {
        setVisible(false)
        dispatch(setList([]))
    }

    return (
        <>
            <button onClick={() => setVisible(true)} className={classes.burgerButton}>
                <img src={burger} alt="menu"/>
            </button>
            <MobilePanel visible={visible} setVisible={setVisible} isHorizontal={false}>
                <Navigation onClick={() => onClickNavigation()} className={classes.navigation}/>
            </MobilePanel>
        </>
    );
};

export default BurgerNavigation;