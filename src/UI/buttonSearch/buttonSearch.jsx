import React from 'react';
import classes from './buttonSearch.module.scss'
import search from '../../img/search.png'

const ButtonSearch = ({className, onClick}) => {
    return (
        <button onClick={onClick} className={[classes.button, className].join(' ')}>
            <img src={search} alt="search"/>
        </button>
    );
};

export default ButtonSearch;