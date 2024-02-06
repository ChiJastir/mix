import React, {useEffect, useState} from 'react';
import classes from './search.module.scss'
import Heading from "../../UI/heading/heading";
import Button from "../../UI/button/button";
import {useDispatch} from "react-redux";
import {setContentType, setFilter, setGenre, setYears} from '../../store/slices/searchSlice'
import {setList, setPage} from '../../store/slices/moviesSlice'
import MySelect from "../../UI/select/select";
import {useLocation} from "react-router-dom";

const Search = ({className, setVisible}) => {
    const [localFilter, setLocalFilter] = useState({value: 'votes.kp', label: 'Сортировка'})
    const [localYear, setLocalYear] = useState({value: '1860-2030', label: 'Годы'})
    const [localGenre, setLocalGenre] = useState({value: '', label: 'Жанры'})

    const dispatch = useDispatch()

    const path = useLocation()

    useEffect(() => {
        dispatch(setContentType((path.pathname).split('/').join('')))
    }, [path])

    function clickBtn() {
        dispatch(setList([]))
        dispatch(setPage(1))
        try {
            setVisible(false)
        } catch (e) {

        }

        dispatch(setYears(localYear.value))
        dispatch(setFilter(localFilter.value))
        dispatch(setGenre(localGenre.value))
    }

    return (
        <aside style={{marginTop: 10}} className={[classes.container, className].join(' ')}>
            <Heading>Поиск</Heading>
            <div className={classes.search_and_filters}>
                <MySelect
                    placeholder={'Сортировка'}
                    options={[
                        {value: 'votes.kp', label: 'По популярности'},
                        {value: 'rating.kp', label: 'По рейтингу'},
                    ]}
                    selectedOption={localFilter}
                    setSelectedOption={setLocalFilter}
                />
                <hr/>
                <MySelect
                    placeholder={'Годы'}
                    options={[
                        {value: '1860-2030', label: 'Все годы'},
                        {value: '2020-' + new Date().getFullYear(), label: '2020-' + new Date().getFullYear()},
                        {value: '2015-2020', label: '2015-2020'},
                        {value: '2010-2015', label: '2010-2015'},
                        {value: '2005-2010', label: '2005-2010'},
                        {value: '2000-2005', label: '2000-2005'},
                        {value: '1990-2000', label: '1990-2000'},
                        {value: '1980-1990', label: '1980-1990'},
                        {value: '1970-1980', label: '1970-1980'},
                        {value: '1860-1970', label: 'До 1970'},
                    ]}
                    selectedOption={localYear}
                    setSelectedOption={setLocalYear}
                />
                <hr/>
                <MySelect
                    placeholder={'Жанр'}
                    options={[
                        {value: '', label: 'Все жанры'},
                        {value: 'биография', label: 'Биография'},
                        {value: 'боевик', label: 'Боевик'},
                        {value: 'вестерн', label: 'Вестерн'},
                        {value: 'военный', label: 'Военный'},
                        {value: 'детектив', label: 'Детектив'},
                        {value: 'документальный', label: 'Документальный'},
                        {value: 'драма', label: 'Драма'},
                        {value: 'история', label: 'История'},
                        {value: 'комедия', label: 'Комедия'},
                        {value: 'криминал', label: 'Криминал'},
                        {value: 'мелодрама', label: 'Мелодрама'},
                        {value: 'мюзикл', label: 'Мюзикл'},
                        {value: 'приключения', label: 'Приключения'},
                        {value: 'семейный', label: 'Семейный'},
                        {value: 'триллер', label: 'Триллер'},
                        {value: 'ужасы', label: 'Ужасы'},
                        {value: 'фантастика', label: 'Фантастика'},
                        {value: 'фэнтези', label: 'Фэнтези'},
                    ]}
                    selectedOption={localGenre}
                    setSelectedOption={setLocalGenre}
                />
                <div className={classes.btn_cont}>
                    <Button onClick={() => clickBtn()}>Искать</Button>
                </div>
            </div>
        </aside>
    );
};

export default Search;