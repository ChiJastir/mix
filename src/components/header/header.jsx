import React from 'react';
import classes from "./header.module.css";
import logo from '../../img/full-logo.svg'
import {Link} from "react-router-dom";

const Header = ({className}) => {
    return (
        <header className={[classes.header, className].join(' ')}>
            <Link to="/"><img className={classes.logo} src={logo} alt="logo"/></Link>
            <ul className={classes.list}>
                <li><Link className={classes.list_item} to={'/catalog'}>Каталог</Link></li>
            </ul>
        </header>
    );
};

export default Header;