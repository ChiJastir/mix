import React, {useEffect, useState} from 'react';
import classes from './singleMoviePage.module.css'
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFething";
import getAllFilms from "../../API/getAllFilms";
import Heading from "../../UI/heading/heading";
import Loader from "../../UI/loader/loader";
import undefinedPost from "../../img/null-poster.png";

const SingleMoviePage = () => {
    const params = useParams()
    const [movie, setMovie] = useState([])

    const [fetching, isLoading] = useFetching(async () => {
        const response = await getAllFilms.getById(params.id)
        setMovie(response.data.docs[0])
    })

    useEffect(() => {
        fetching()
    }, [])

    return (
        <div className={classes.content}>
            {isLoading
                ? <div className={classes.loader}><Loader/></div>
                : <div className={classes.container}>
                    {movie.poster
                        ? <img className={classes.poster} src={movie.poster.url} alt="poster"/>
                        : <img className={classes.poster} src={undefinedPost} alt="poster"/>
                    }
                    <div>
                        <Heading>{movie.name}</Heading>
                        <p>{movie.description}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default SingleMoviePage;