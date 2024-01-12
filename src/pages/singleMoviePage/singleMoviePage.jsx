import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFething";
import gets from "../../API/gets";
import Single from "../../components/entities/movies/single";


// актеры, композиторы, художники, режиссеры, монтажеры, операторы, продюсеры, актеры дубляжа, редакторы

const SingleMoviePage = () => {
    const params = useParams()
    const [movie, setMovie] = useState([])

    const [fetching, isLoading] = useFetching(async () => {
        if (params.id !== 'random')
            setMovie((await gets.getById(params.id)).data)
        else
            setMovie((await gets.getRandom()).data)
    })


    useEffect(() => {
        fetching()
    }, [params.id])

    return (
        <Single movie={movie} loading={isLoading}/>
    );
};

export default SingleMoviePage;