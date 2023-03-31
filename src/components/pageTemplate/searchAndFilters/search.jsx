import React, {useState} from 'react';
import classes from './search.module.css'
import Heading from "../../../UI/heading/heading";
import Button from "../../../UI/button/button";
import Input from "../../../UI/input/input";

const Search = ({className, setSearch}) => {
    const [localSearch, setLocalSearch] = useState('')

    return (
        <aside className={[classes.container, className].join(' ')}>
            <Heading>Поиск</Heading>
            <Input value={localSearch} onChange={event => setLocalSearch(event.target.value)} className={classes.input} placeholder={"Поиск"}/>
            <hr/>
            <div className={classes.btn_cont}>
                <Button
                    onClick={() => setSearch(localSearch)}
                    search={localSearch}
                >Искать</Button>
            </div>
        </aside>
    );
};

export default Search;