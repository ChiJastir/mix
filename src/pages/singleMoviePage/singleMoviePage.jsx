import React, {useEffect, useState} from 'react';
import classes from '../singlePage.module.css'
import localClasses from  './singleMoviePage.module.css'
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFething";
import gets from "../../API/gets";
import Loader from "../../UI/loader/loader";
import undefinedPoster from "../../img/null-poster.png";
import {movieLengthInHour, joinObject, addingSpacesInMoney} from "../../utils/utils";
import ButtonLink from "../../UI/buttonLink/buttonLink";
import Button from "../../UI/button/button";
import ModalWindow from "../../UI/modalWindow/modalWindow";
import Persons from "../../components/persons/persons";
import Facts from "../../components/facts/facts";

// актеры, композиторы, художники, режиссеры, монтажеры, операторы, продюсеры, актеры дубляжа, редакторы

const SingleMoviePage = () => {
    const params = useParams()
    const [movie, setMovie] = useState([])
    const [visibleMans, setVisibleMans] = useState(false)
    const [visibleFacts, setVisibleFacts] = useState(false)

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
        <div className={classes.content}>
            {isLoading
                ? <div className={classes.loader}><Loader/></div>
                : <div>
                    <div className={classes.container}>
                        {movie.poster
                            ? <img className={classes.poster} src={movie.poster.url} alt="poster"/>
                            : <img className={classes.poster} src={undefinedPoster} alt="poster"/>
                        }
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
                                    <li><span>Год производства: </span>{movie.year}</li>
                                    <li><span>Жанры: </span>{joinObject(movie.genres)}</li>
                                    <li><span>Страны: </span>{joinObject(movie.countries)}</li>
                                    {Object.values(movie.budget ?? []).length !== 0 && <li><span>Бюджет: </span>{addingSpacesInMoney(movie.budget.value) + movie.budget.currency}</li>}
                                    {Object.values(movie.fees.world ?? []).length !== 0 && <li><span>Сборы в мире: </span>{addingSpacesInMoney(movie.fees.world.value) + movie.fees.world.currency}</li>}
                                    {Object.values(movie.fees.russia ?? []).length !== 0 && <li><span>Сборы в России: </span>{addingSpacesInMoney(movie.fees.russia.value) + movie.fees.russia.currency}</li>}
                                    <li><span>Длительность серии: </span>{movieLengthInHour(movie.movieLength)}</li>
                                </ul>
                                <div className={classes.buttons}>
                                    <Button onClick={() => setVisibleMans(true)}>Люди</Button>
                                    <ModalWindow
                                        visible={visibleMans}
                                        setVisible={setVisibleMans}
                                    >
                                        <Persons persons={movie.persons}/>
                                    </ModalWindow>
                                    {movie.facts && <div>
                                        <Button onClick={() => setVisibleFacts(true)}>Факты</Button>
                                        <ModalWindow
                                            visible={visibleFacts}
                                            setVisible={setVisibleFacts}
                                        >
                                            <Facts facts={movie.facts}/>
                                        </ModalWindow>
                                    </div>}
                                    <ButtonLink href={"https://www.kinopoisk.ru/film/" + movie.id}>На кинопоиск</ButtonLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    {movie.description && <div className={localClasses.description}>
                        <h3>Сюжет</h3>
                        <p>{movie.description}</p>
                    </div>}
                </div>
            }
        </div>
    );
};

export default SingleMoviePage;