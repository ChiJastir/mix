import React from 'react';
import classes from "./header.module.css";
import logo from '../../../img/full-logo.svg'
import {Link} from "react-router-dom";

const Header = ({className, setContentType}) => {
    return (
        <header className={[classes.header, className].join(' ')}>
            <Link to="/"><img className={classes.logo} src={logo} alt="logo"/></Link>
            <ul className={classes.list}>
                <li className={classes.list_item} onClick={() => setContentType('movie')}>Фильмы</li>
                <li className={classes.list_item} onClick={() => setContentType('cartoon')}>Мультфильмы</li>
                <li className={classes.list_item} onClick={() => setContentType('anime')}>Аниме</li>
            </ul>
        </header>
    );
};

export default Header;