import React, {useEffect} from 'react';
import classes from "./navigation.module.scss";
import {NavLink} from "react-router-dom";

const links = [
    {
        path: '/',
        name: 'Главная'
    },
    {
        path: '/movie',
        name: 'Фильмы'
    },
    {
        path: '/cartoon',
        name: 'Мультфильмы'
    },
    {
        path: '/anime',
        name: 'Аниме'
    },
    {
        path: '/movie/random',
        name: 'Случайный фильм'
    },

]

const Navigation = ({className, children, onClick}, props) => {
    return (
        <aside className={classes.aside}>
            <ul className={[classes.list, className].join(' ')} onClick={onClick} {...props}>
                {links.map(link => <li key={link.path}><NavLink to={link.path} className={({ isActive }) => (isActive ? [classes.linkActive, classes.listItem].join(' ') : classes.listItem)}>{link.name}</NavLink></li>)}
            </ul>
            <div className={classes.children}>
                {children}
            </div>
        </aside>
    );
};

export default Navigation;