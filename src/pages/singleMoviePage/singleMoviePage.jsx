import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useNavigation, useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFething";
import gets from "../../API/gets";
import Single from "../../components/entities/movies/single";


// актеры, композиторы, художники, режиссеры, монтажеры, операторы, продюсеры, актеры дубляжа, редакторы

const SingleMoviePage = () => {
    const params = useParams()
    const [movie, setMovie] = useState([])

    const path = useLocation()

    const [fetching, isLoading] = useFetching(async () => {
        if ((path.pathname).split('/')[1] !== 'random')
            setMovie((await gets.getById(params.id)).data)
        else
            setMovie((await gets.getRandom()).data)
    })


    useEffect(() => {
        fetching()
    }, [params.id, path])

    return (
        <Single movie={movie} loading={isLoading}/>
    );
};

export default SingleMoviePage;