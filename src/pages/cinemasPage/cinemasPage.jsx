import React, {useEffect, useRef} from 'react';
import Heading from "../../UI/heading/heading";
import Card from "../../components/card/card";
import Loader from "../../UI/loader/loader";
import gets from "../../API/gets";
import {useFetching} from "../../hooks/useFething";
import classes from './cinemasPage.module.scss'
import Search from "../../components/searchAndFilters/search";
import {useResize} from "../../hooks/useResize";
import MobileSearch from "../../UI/buttonSearch/buttonSearch";
import useOnScreen from "../../hooks/useOnScreen";
import Navigation from "../../components/navigation/navigation";
import {useDispatch, useSelector} from "react-redux";
import {setList, setPage} from "../../store/slices/moviesSlice";

const CinemasPage = () => {
    const {
        moviesList,
        page
    } = useSelector((state) => state.movies)

    const {
        searchQuery,
        contentType,
        years,
        filter,
        genre
    } = useSelector((state) => state.search)

    const dispatch = useDispatch()

    const width = useResize()
    const lastElem = useRef()

    async function loadMovies(){
        const req = await gets.getMovies(contentType, page, searchQuery, filter, years, genre)
        if (page <= 1){
            dispatch(setList(req.data.docs))
        } else {
            dispatch(setList([...moviesList, ...req.data.docs]))
        }
    }

    const [fetching] = useFetching(loadMovies)

    const isVisible = useOnScreen(lastElem)

    useEffect(() => {
        if (isVisible && moviesList.length > 0){
            dispatch(setPage(page + 1))
        }
    }, [isVisible])

    useEffect( () => {
        fetching()
    }, [page, contentType, searchQuery, filter, years, genre])

    return (
        <div className={classes.template}>
            {width > 850
                ? <Navigation onClick={() => dispatch(setList([]))}>
                    <Search/>
                </Navigation>
                : <MobileSearch>Показать</MobileSearch>
            }
            <div className={classes.content}>
                <Heading>Каталог</Heading>
                {moviesList.map(item => <Card key={item.id} data={item}/>)}
                <div ref={lastElem} className={classes.loader}><Loader/></div>
            </div>
        </div>
    )
}

export default CinemasPage;