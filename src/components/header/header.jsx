import React, {useEffect, useState} from 'react';
import classes from "./header.module.scss";
import {useResize} from "../../hooks/useResize";
import Input from "../../UI/input/input";
import BurgerNavigation from "../burgerNavigation/burgerNavigation";
import gets from "../../API/gets";
import {useFetching} from "../../hooks/useFething";
import {useDispatch, useSelector} from "react-redux";
import {searchQuery} from "../../store/slices/searchSlice";
import {setList, setPage} from "../../store/slices/moviesSlice";

const Header = ({className}) => {
    const width = useResize()
    const [localSearch, setLocalSearch] = useState('')

    const dispatch = useDispatch()

    const formSubmit = (event) => {
        event.preventDefault()
        dispatch(searchQuery(localSearch))
        dispatch(setList([]))
        dispatch(setPage(1))
    }

    return (
        <header className={[classes.header, className].join(' ')}>
            {width > 850 && <div className={classes.logo}><h1>MEDIA APP</h1></div>}
            {width <= 850 && <BurgerNavigation/>}
            <form onSubmit={formSubmit}>
                <Input
                    value={localSearch}
                    onChange={event => setLocalSearch(event.target.value)}
                    className={classes.input}
                    placeholder={"Поиск фильма"}
                />
            </form>
        </header>
    );
};

export default Header;