import React, {useState} from 'react';
import classes from "./header.module.scss";
import {useResize} from "../../hooks/useResize";
import Input from "../../UI/input/input";
import BurgerNavigation from "../burgerNavigation/burgerNavigation";
import {useDispatch} from "react-redux";
import {setSearchQuery} from "../../store/slices/searchSlice";
import {setList, setPage} from "../../store/slices/moviesSlice";
import {useNavigate} from "react-router-dom";

const Header = ({className}) => {
    const width = useResize()
    const [localSearch, setLocalSearch] = useState('')

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const formSubmit = (event) => {
        event.preventDefault()
        dispatch(setSearchQuery(localSearch))
        dispatch(setList([]))
        dispatch(setPage(1))
    }

    return (
        <header className={[classes.header, className].join(' ')}>
            {width > 850 && <div className={classes.logo} onClick={() => navigate('/')}><h1>HIDENGO</h1></div>}
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