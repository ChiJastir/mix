import React, {useState} from 'react';
import classes from "./header.module.css";
import logo from '../../img/full-logo.svg'
import {Link, useNavigate} from "react-router-dom";
import burgerMenu from '../../img/burger-menu.png'
import MobilePanelTop from "../../UI/mobilePanelTop/mobilePanelTop";
import {useResize} from "../../hooks/useResize";

const Header = ({className}) => {
    const router = useNavigate()
    const [visible, setVisible] = useState(false)
    const width = useResize()

    return (
        <header className={[classes.header, className].join(' ')}>
            <Link to="/"><img className={classes.logo} src={logo} alt="logo"/></Link>
            {width <= 850 && <img onClick={() => setVisible(true)} className={classes.burgerMenu} src={burgerMenu} alt="menu"/>}
            {width <= 850 && <MobilePanelTop visible={visible} setVisible={setVisible}>
                <ul className={classes.modalList}>
                    <li onClick={() => {router('/'); setVisible(false) }} className={classes.list_item}>Главная</li>
                    <li onClick={() => {router('/movies'); setVisible(false) }} className={classes.list_item}>Фильмы</li>
                    <li onClick={() => {
                        if (!window.location.href.includes('random'))
                            router('/movie/random')
                        else
                            router(0)
                        setVisible(false)
                    }} className={classes.list_item}>Случайный фильм</li>
                </ul>
            </MobilePanelTop>}
            {width > 850 && <ul className={classes.list}>
                <li onClick={() => router('/')} className={classes.list_item}>Главная</li>
                <li onClick={() => router('/movies')} className={classes.list_item}>Фильмы</li>
                <li onClick={() => {
                    if (!window.location.href.includes('random'))
                        router('/movie/random')
                    else
                        router(0)
                }} className={classes.list_item}>Случайный фильм</li>
            </ul>}
        </header>
    );
};

export default Header;