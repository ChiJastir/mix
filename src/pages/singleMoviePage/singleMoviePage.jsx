import React, {useEffect, useState} from 'react';
import classes from '../singlePage.module.scss'
import localClasses from './singleMoviePage.module.scss'
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFething";
import gets from "../../API/gets";
import Loader from "../../UI/loader/loader";
import undefinedPoster from "../../assets/null-poster.png";
import {movieLengthInHour, joinObject, addingSpacesInMoney} from "../../utils/utils";
import Button from "../../UI/button/button";
import ModalWindow from "../../UI/modalWindow/modalWindow";
import Persons from "../../components/persons/persons";

import _ from 'lodash'

// актеры, композиторы, художники, режиссеры, монтажеры, операторы, продюсеры, актеры дубляжа, редакторы

const SingleMoviePage = () => {
    const params = useParams()
    const [movie, setMovie] = useState([])
    const [visibleMans, setVisibleMans] = useState(false)

    const [fetching, isLoading] = useFetching(async () => {
        if (params.id !== 'random')
            setMovie((await gets.getById(params.id)).data)
        else
            setMovie((await gets.getRandom()).data)
    })


    const allDetails = [
        { title: 'Год производства', key: 'year', formatter: null },
        { title: 'Жанры', key: 'genres', formatter: joinObject },
        { title: 'Страны', key: 'countries', formatter: joinObject },
        { title: 'Бюджет', key: 'budget', formatter: priceFormatter },
        { title: 'Сборы в мире', key: 'fees.world', formatter: priceFormatter },
        { title: 'Сборы в России', key: 'fees.russia', formatter: priceFormatter },
        { title: 'Длительность серии', key: 'movieLength', formatter: movieLengthInHour },
    ]


    function priceFormatter({ value, currency }){
        return addingSpacesInMoney(value) + ' ' + currency
    }

    function movieDetails(){

        const details = []

        allDetails.forEach(detail => {
            let value = _.get(movie, detail.key)
            if(!value)
                return;

            if(detail.formatter)
                value = detail.formatter(value)

            details.push({
                title: detail.title,
                value
            })
        })

        return details
    }

    useEffect(() => {
        fetching()
    }, [params.id])

    return (
        <div className={classes.content}>
            {isLoading
                ? <div className={classes.loader}><Loader/></div>
                : <>
                    <div className={classes.container}>
                        <img className={classes.poster} src={movie.poster?.url ?? undefinedPoster} alt="poster"/>
                        <div className={classes.info}>
                            <div className={localClasses.header}>
                                <div>
                                    <h1 className={classes.name}>{movie.name}</h1>
                                    <h2 className={classes.altName}>{movie.alternativeName}</h2>
                                </div>
                                <div>
                                    <p className={localClasses.rating}><span>{Number((movie.rating.kp).toFixed(1))}</span>/10</p>
                                    <p className={localClasses.votes}>{movie.votes.kp + ' оценок'}</p>
                                </div>
                            </div>
                            <div className={classes.detailedInfo}>
                                <ul>
                                    {movieDetails().map(detail => <li><span>{detail.title}:</span> {detail.value}</li>)}
                                </ul>
                                <div className={classes.buttons}>
                                    <Button onClick={() => setVisibleMans(true)}>Люди</Button>
                                    <ModalWindow
                                        visible={visibleMans}
                                        setVisible={setVisibleMans}
                                    >
                                        <Persons persons={movie.persons}/>
                                    </ModalWindow>
                                    <Button onClick={() => window.open("https://www.kinopoisk.ru/film/" + movie.id, "_blank")}>На кинопоиск</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {movie.description && <div className={localClasses.description}>
                        <h3>Сюжет</h3>
                        <p>{movie.description}</p>
                    </div>}
                </>
            }
        </div>
    );
};

export default SingleMoviePage;