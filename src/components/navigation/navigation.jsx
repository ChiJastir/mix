import React from 'react';
import classes from "./navigation.module.scss";
import {NavLink, useNavigate} from "react-router-dom";

const Navigation = ({className}, props) => {
    const router = useNavigate()

    return (
        <ul className={[classes.list, className].join(' ')} {...props}>
            <li><NavLink to={'/'} className={({ isActive }) => (isActive ? [classes.linkActive, classes.listItem].join(' ') : classes.listItem)}>Главная</NavLink></li>
            <li><NavLink to={'/movies'} className={({ isActive }) => (isActive ? [classes.linkActive, classes.listItem].join(' ') : classes.listItem)}>Фильмы</NavLink></li>
            <li><NavLink to={'/cartoons'} className={({ isActive }) => (isActive ? [classes.linkActive, classes.listItem].join(' ') : classes.listItem)}>Мультфильмы</NavLink></li>
            <li onClick={() => {
                if (!window.location.href.includes('random'))
                    router('/movie/random')
                else
                    router(0)
            }} className={classes.listItem}>Случайный фильм</li>
        </ul>
    );
};

export default Navigation;