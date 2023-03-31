import React, {useEffect, useRef, useState} from 'react';
import PageTemplate from "../../components/pageTemplate/pageTemplate";
import Heading from "../../UI/heading/heading";
import Card from "../../components/card/card";
import Loader from "../../UI/loader/loader";
import getAllFilms from "../../API/getAllFilms";
import {useFetching} from "../../hooks/useFething";
import classes from './movie.module.css'

const MoviePage = () => {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)

    const [contentType, setContentType] = useState('movie')
    const [year, setYear] = useState('1860-2030')
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    const [genre, setGenre] = useState('')

    const lastElem = useRef()
    const observer = useRef()

    async function loadMovies(localPage = 1){
        const zxc = await getAllFilms.get(contentType, localPage, search, filter, year, genre)
        if (localPage === 1){
            setMovies(zxc.data.docs)
        } else {
            setMovies([...movies, ...zxc.data.docs])
        }
    }

    const [fetching, isLoading] = useFetching(loadMovies)

    useEffect(() => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect()
        var callback = function(entries) {
            if (entries[0].isIntersecting){
                fetching(page+ 1)
                setPage(page+ 1)
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElem.current)
    }, [isLoading])

    useEffect( () => {
        setPage(1)
        fetching()
    }, [contentType, search, filter, year, genre])

    return (
        <PageTemplate
            setContentType={setContentType}
            setSearch={setSearch}
            setFilter={setFilter}
            setYear={setYear}
            setGenre={setGenre}
        >
            <Heading>Каталог</Heading>
            {movies.map(item => <Card key={item.id} data={item}/>)}
            {movies.length >= 0 &&
                <div ref={lastElem}></div>
            }
            {isLoading &&
                <div className={classes.loader}><Loader/></div>
            }
        </PageTemplate>
    )
}

export default MoviePage;