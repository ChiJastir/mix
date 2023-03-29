import React from 'react';
import classes from './search.module.css'
import Heading from "../../../UI/heading/heading";
import Button from "../../../UI/button/button";
import Input from "../../../UI/input/input";

const Search = ({className, loadMoviesSinglePage, setSearch, search}) => {
    return (
        <aside className={[classes.container, className].join(' ')}>
            <Heading>Поиск</Heading>
            <Input value={search} onChange={event => setSearch(event.target.value)} className={classes.input} placeholder={"Поиск"}/>
            <div className={classes.btn_cont}>
                <Button
                    onClick={loadMoviesSinglePage}
                    search={search}
                >Искать</Button>
            </div>
        </aside>
    );
};

export default Search;