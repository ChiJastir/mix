import React, {useEffect, useRef, useState} from 'react';
import Heading from "../../UI/heading/heading";
import Card from "../../components/card/card";
import Loader from "../../UI/loader/loader";
import gets from "../../API/gets";
import {useFetching} from "../../hooks/useFething";
import classes from './moviesPage.module.css'
import Search from "../../components/searchAndFilters/search";
import MobilePanelLeft from "../../UI/mobilePanelLeft/mobilePanelLeft";
import {useResize} from "../../hooks/useResize";
import ButtonSearch from "../../UI/buttonSearch/buttonSearch";
import useOnScreen from "../../hooks/useOnScreen";
import {NavLink, useNavigate} from "react-router-dom";
import Navigation from "../../components/navigation/navigation";

const MoviesPage = () => {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)

    const [contentType, setContentType] = useState('movie')
    const [year, setYear] = useState('1860-2030')
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('votes.kp')
    const [genre, setGenre] = useState('')

    const [visible, setVisible] = useState(false)

    const width = useResize()
    const router = useNavigate()

    const lastElem = useRef()

    async function loadMovies(){
        const req = await gets.get(contentType, page, search, filter, year, genre)
        if (page <= 1){
            setMovies(req.data.docs)
        } else {
            setMovies([...movies, ...req.data.docs])
        }
    }

    const [fetching, isLoading] = useFetching(loadMovies)

    const isVisible = useOnScreen(lastElem)

    useEffect(() => {
        if (isVisible && movies.length > 0){
            setPage(page+ 1)
        }
    }, [isVisible])

    useEffect( () => {
        fetching()
    }, [page, contentType, search, filter, year, genre])

    return (
        <div className={classes.template}>
            {width <= 850 && <ButtonSearch onClick={() => setVisible(true)}>Показать</ButtonSearch>}
            {width <= 850 && <MobilePanelLeft visible={visible} setVisible={setVisible}>
                <Search
                    setMovies={setMovies}
                    setYear={setYear}
                    setContentType={setContentType}
                    setFilter={setFilter}
                    setSearch={setSearch}
                    setGenre={setGenre}
                    setPage={setPage}
                    setVisible={setVisible}
                />
                <br/>
            </MobilePanelLeft>}
            {width > 850 && <aside className={classes.search}>
                {width > 850 && <Navigation className={classes.navigation}/>}
                <Search
                    setMovies={setMovies}
                    setYear={setYear}
                    setContentType={setContentType}
                    setFilter={setFilter}
                    setSearch={setSearch}
                    setGenre={setGenre}
                    setPage={setPage}
                    setVisible={setVisible}
                />
            </aside>}
            <div className={classes.content}>
                <Heading>Каталог</Heading>
                {movies.map(item => <Card key={item.id} data={item}/>)}
                <div ref={lastElem} className={classes.loader}><Loader/></div>
            </div>
        </div>
    )
}

export default MoviesPage;