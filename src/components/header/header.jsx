import React from 'react';
import classes from "./header.module.css";
import logo from '../../img/full-logo.svg'
import {Link, useNavigate} from "react-router-dom";

const Header = ({className}) => {
    const router = useNavigate()

    return (
        <header className={[classes.header, className].join(' ')}>
            <Link to="/"><img className={classes.logo} src={logo} alt="logo"/></Link>
            <ul className={classes.list}>
                <li onClick={() => router('/movies')} className={classes.list_item}>Фильмы</li>
                <li onClick={() => {
                    if (!window.location.href.includes('random'))
                        router('/movie/random')
                    else
                        router(0)
                }} className={classes.list_item}>Случайный фильм</li>
            </ul>
        </header>
    );
};

export default Header;