import React, {useState} from 'react';
import classes from "./header.module.scss";
import {useNavigate} from "react-router-dom";
import burgerMenu from '../../img/burger-menu.png'
import MobilePanelTop from "../../UI/mobilePanelTop/mobilePanelTop";
import {useResize} from "../../hooks/useResize";
import Input from "../../UI/input/input";

const Header = ({className}) => {
    const router = useNavigate()
    const [visible, setVisible] = useState(false)
    const width = useResize()
    const [localSearch, setLocalSearch] = useState('')

    return (
        <header className={[classes.header, className].join(' ')}>
            {/*<Link to="/"><img className={classes.logo} src={logo} alt="logo"/></Link>*/}
            <div className={classes.logo}><h1>MEDIA APP</h1></div>
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
            <Input value={localSearch} onChange={event => setLocalSearch(event.target.value)} className={classes.input} placeholder={"Поиск фильма"}/>
        </header>
    );
};

export default Header;