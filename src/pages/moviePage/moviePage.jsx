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

    const lastElem = useRef()
    const observer = useRef()

    async function loadMovies(){
        const zxc = await getAllFilms.get(contentType, page)
        setMovies([...movies, ...zxc.data.docs])
    }

    async function loadMoviesSinglePage(search){
        const zxc = await getAllFilms.get(contentType, page, search)
        setMovies(zxc.data.docs)
    }

    const [fetching, isLoading] = useFetching(loadMovies)

    useEffect(() => {
        loadMoviesSinglePage()
    }, [contentType])

    useEffect(() => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect()
        var callback = function(entries, observer) {
            if (entries[0].isIntersecting){
                setPage(page+1)
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElem.current)
    }, [isLoading])

    useEffect( () => {
        fetching()
    }, [page])

    return (
        <div>
            <PageTemplate
                setContentType={setContentType}
                loadMoviesSinglePage={loadMoviesSinglePage}
            >
                <Heading>Католог фильмов</Heading>
                {movies.map(item => <Card key={item.id} data={item}/>)}
                {isLoading &&
                    <div className={classes.loader}><Loader/></div>
                }
                <div ref={lastElem}></div>
            </PageTemplate>
        </div>
    );
};

export default MoviePage;