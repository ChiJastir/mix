import React, {useState} from 'react';
import classes from './search.module.css'
import Heading from "../../../UI/heading/heading";
import Button from "../../../UI/button/button";
import Input from "../../../UI/input/input";
import Select from "../../../UI/select/select";

const Search = ({className, setSearch, setFilter, setContentType, setYear, setGenre}) => {
    const [localSearch, setLocalSearch] = useState('')
    const [localFilter, setLocalFilter] = useState('votes.kp')
    const [localContentType, setLocalContentType] = useState('movie')
    const [localYear, setLocalYear] = useState('1860-2030')
    const [localGenre, setLocalGenre] = useState('')

    function clickBtn() {
        setGenre(localGenre)
        setYear(localYear)
        setContentType(localContentType)
        setFilter(localFilter)
        setSearch(localSearch)
    }

    return (
        <aside className={[classes.container, className].join(' ')}>
            <Heading>Поиск</Heading>
            <div className={classes.search_and_filters}>
                <Input value={localSearch} onChange={event => setLocalSearch(event.target.value)} className={classes.input} placeholder={"Поиск"}/>
                <hr/>
                <Select
                    className={classes.select}
                    heading={'Тип'}
                    options={[
                        {value: 'movie', name: 'Фильмы'},
                        {value: 'cartoon', name: 'Мультфильмы'},
                        {value: 'anime', name: 'Аниме'},
                    ]}
                    value={localContentType}
                    sortMovies={key => setLocalContentType(key)}
                />
                <hr/>
                <Select
                    className={classes.select}
                    heading={'Сортировка'}
                    options={[
                        {value: 'votes.kp', name: 'По популярности'},
                        {value: 'rating.kp', name: 'По рейтингу'},
                    ]}
                    value={localFilter}
                    sortMovies={key => setLocalFilter(key)}
                />
                <hr/>
                <Select
                    className={classes.select}
                    heading={'Годы'}
                    options={[
                        {value: '1860-2030', name: 'Все годы'},
                        {value: '2020-' + new Date().getFullYear(), name: '2020-' + new Date().getFullYear()},
                        {value: '2015-2020', name: '2015-2020'},
                        {value: '2010-2015', name: '2010-2015'},
                        {value: '2005-2010', name: '2005-2010'},
                        {value: '2000-2005', name: '2000-2005'},
                        {value: '1990-2000', name: '1990-2000'},
                        {value: '1980-1990', name: '1980-1990'},
                        {value: '1970-1980', name: '1970-1980'},
                        {value: '1860-1970', name: 'До 1970'},
                    ]}
                    value={localYear}
                    sortMovies={key => setLocalYear(key)}
                />
                <hr/>
                <Select
                    className={classes.select}
                    heading={'Жанр'}
                    options={[
                        {value: '', name: 'Все жанры'},
                        {value: 'биография', name: 'Биография'},
                        {value: 'боевик', name: 'Боевик'},
                        {value: 'вестерн', name: 'Вестерн'},
                        {value: 'военный', name: 'Военный'},
                        {value: 'детектив', name: 'Детектив'},
                        {value: 'документальный', name: 'Документальный'},
                        {value: 'драма', name: 'Драма'},
                        {value: 'история', name: 'История'},
                        {value: 'комедия', name: 'Комедия'},
                        {value: 'криминал', name: 'Криминал'},
                        {value: 'мелодрама', name: 'Мелодрама'},
                        {value: 'мюзикл', name: 'Мюзикл'},
                        {value: 'приключения', name: 'Приключения'},
                        {value: 'семейный', name: 'Семейный'},
                        {value: 'триллер', name: 'Триллер'},
                        {value: 'ужасы', name: 'Ужасы'},
                        {value: 'фантастика', name: 'Фантастика'},
                        {value: 'фэнтези', name: 'Фэнтези'},
                    ]}
                    value={localGenre}
                    sortMovies={key => setLocalGenre(key)}
                />
                <div className={classes.btn_cont}>
                    <Button
                        onClick={() => clickBtn()}
                        search={localSearch}
                    >Искать</Button>
                </div>
            </div>
        </aside>
    );
};

export default Search;