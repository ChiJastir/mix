import React, {useEffect, useState} from 'react';
import classes from '../singlePage.module.scss'
import localClasses from './singleMoviePage.module.scss'
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFething";
import gets from "../../API/gets";
import Loader from "../../UI/loader/loader";
import undefinedPoster from "../../assets/null-poster.png";
import {movieLengthInHour, joinObject, addingSpacesInMoney, rgbToHex, contrastingColor} from "../../utils/utils";
import ButtonLink from "../../UI/buttonLink/buttonLink";
import Button from "../../UI/button/button";
import ModalWindow from "../../UI/modalWindow/modalWindow";
import Persons from "../../components/persons/persons";
import Facts from "../../components/facts/facts";
import ColorThief from "colorthief/dist/color-thief";

// актеры, композиторы, художники, режиссеры, монтажеры, операторы, продюсеры, актеры дубляжа, редакторы

const SingleMoviePage = () => {
    const params = useParams()
    const [movie, setMovie] = useState([])
    const [visibleMans, setVisibleMans] = useState(false)
    const [visibleFacts, setVisibleFacts] = useState(false)
    const [color, setColor] = useState([])

    const [fetching, isLoading] = useFetching(async () => {
        if (params.id !== 'random')
            setMovie((await gets.getById(params.id)).data)
        else
            setMovie((await gets.getRandom()).data)

    })

    useEffect(() => {
        fetching()
    }, [params.id])

    useEffect(() => {
        if (isLoading) return
        const img = document.getElementsByTagName('img')[1]

        // if (assets.complete) {
        //     console.log(rgbToHex(asd.getColor(assets)))
        //     // console.log(assets)
        // }

        // asd.getColor(<assets src={movie.poster.url} crossOrigin={'anonymous'}/>)
        //     .then(color => { console.log(color) })
        //     .catch(err => { console.log(err) })
        const dsa = document.createElement('img')
        dsa.src = movie.poster.url
        dsa.crossOrigin = 'anonymous'
        if (dsa.complete) {
            setColor([rgbToHex(asd.getPalette(dsa, 2)[0]), rgbToHex(asd.getPalette(dsa, 2)[1])])
        } else {
            dsa.addEventListener('load', function() {
                setColor([rgbToHex(asd.getPalette(dsa, 2)[0]), rgbToHex(asd.getPalette(dsa, 2)[1])])
            });
        }
        console.log(movie)
    }, [isLoading])

    const asd = new ColorThief
    return (
        <div className={classes.content} style={{background: `linear-gradient(${color[0]}, ${color[1]})`}}>
            {isLoading
                ? <div className={classes.loader}><Loader/></div>
                : <div>
                    {/*<div style={{width: 100, height: 100, backgroundColor: color}}>*/}
                    {/*    <p style={{color: contrastingColor(color)}}>{contrastingColor(color)}</p>*/}
                    {/*</div>*/}
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