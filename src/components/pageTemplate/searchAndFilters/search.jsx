import React, {useState} from 'react';
import classes from './search.module.css'
import Heading from "../../../UI/heading/heading";
import Button from "../../../UI/button/button";
import Input from "../../../UI/input/input";

const Search = ({className, loadMoviesSinglePage}) => {
    const [search, setSearch] = useState('')

    return (
        <aside className={[classes.container, className].join(' ')}>
            <Heading>Поиск</Heading>
            <Input value={search} onChange={event => setSearch(event.target.value)} className={classes.input} placeholder={"Поиск"}/>
            <Button
                onClick={loadMoviesSinglePage}
                searth={search}
            >123</Button>
        </aside>
    );
};

export default Search;