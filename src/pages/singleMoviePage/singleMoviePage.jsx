import React, {useEffect, useState} from 'react';
import classes from './singleMoviePage.module.css'
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFething";
import getAllFilms from "../../API/getAllFilms";
import Loader from "../../UI/loader/loader";
import undefinedPost from "../../img/null-poster.png";
import {movieLengthInHour, joinObject, addingSpacesInMoney} from "../../utils/utils";
import ButtonLink from "../../UI/buttonLink/buttonLink";
import Button from "../../UI/button/button";

// актеры, композиторы, художники, режиссеры, монтажеры, операторы, продюсеры, актеры дубляжа, редакторы

const SingleMoviePage = () => {
    const params = useParams()
    const [movie, setMovie] = useState([])

    const [fetching, isLoading] = useFetching(async () => {
        const response = await getAllFilms.getById(params.id)
        setMovie(response.data)
    })

    useEffect(() => {
        if (!isLoading){
            console.log(movie)
        }
    }, [movie])

    useEffect(() => {
        fetching()
    }, [])


    return (
        <div className={classes.content}>
            {isLoading
                ? <div className={classes.loader}><Loader/></div>
                : <div>
                    <div className={classes.container}>
                        {movie.poster
                            ? <img className={classes.poster} src={movie.poster.url} alt="poster"/>
                            : <img className={classes.poster} src={undefinedPost} alt="poster"/>
                        }
                        <div className={classes.info}>
                            <div className={classes.header}>
                                <div>
                                    <h1 className={classes.name}>{movie.name}</h1>
                                    <h2 className={classes.altName}>{movie.alternativeName}</h2>
                                </div>
                                <div>
                                    <p className={classes.rating}><span>{Number((movie.rating.kp).toFixed(1))}</span>/10</p>
                                    <p className={classes.votes}>{movie.votes.kp + ' оценок'}</p>
                                </div>
                            </div>
                            <div className={classes.detailedInfo}>
                                <ul>
                                    <li><span>Год производства: </span>{movie.year}</li>
                                    <li><span>Жанры: </span>{joinObject(movie.genres)}</li>
                                    <li><span>Страны: </span>{joinObject(movie.countries)}</li>
                                    {/*<li><span>Актёры: </span>{movie.persons.filter(el => el.profession === 'актеры').map(person => ' ' + person.name)}</li>*/}
                                    <li><span>Бюджет: </span>{addingSpacesInMoney(movie.budget.value) + movie.budget.currency}</li>
                                    <li><span>Сборы в мире: </span>{addingSpacesInMoney(movie.fees.world.value) + movie.fees.world.currency}</li>
                                    <li><span>Сборы в России: </span>{addingSpacesInMoney(movie.fees.russia.value) + movie.fees.russia.currency}</li>
                                    <li><span>Длительность: </span>{movieLengthInHour(movie.movieLength)}</li>
                                </ul>
                                <div className={classes.buttons}>
                                    <div className={classes.trailers}>
                                        {movie.videos.trailers.map((trailer, index) =>
                                            <ButtonLink key={index} href={trailer.url}>Трейлер {index+1}</ButtonLink>
                                        )}
                                    </div>
                                    <div className={classes.col}>
                                        <Button onClick={() => {}}>Люди</Button>
                                    </div>
                                    <div className={classes.col}>
                                        <ButtonLink href={"https://www.kinopoisk.ru/film/" + movie.id}>На кинопоиск</ButtonLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.description}>
                        <h3>Сюжет</h3>
                        <p>{movie.description}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default SingleMoviePage;