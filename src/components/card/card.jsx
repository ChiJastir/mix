import React from 'react';
import {useNavigate} from 'react-router-dom'
import classes from './card.module.css'
import star from '../../img/star.svg'
import undefinedPoster from '../../img/null-poster.png'
import Button from "../../UI/button/button";

const Card = ({data}) => {
    const router = useNavigate()
    return (
        <div className={classes.card}>
            {data.poster
                ? <img className={classes.poster} src={data.poster.url} alt="poster"/>
                : <img className={classes.poster} src={undefinedPoster} alt="poster"/>
            }
            <div className={classes.cardBody}>
                <div className={classes.stars}>
                    <img className={classes.star} src={star} alt="star"/>
                    <p className={classes.rating}>{Number((data.rating.kp).toFixed(1)) + '/10'}</p>
                </div>
                <h3 className={classes.heading}>{data.name}</h3>
                <p className={classes.description}>{data.shortDescription}</p>
                <p className={classes.genre}>
                    Жанры:
                    {data.genres.map(ganre =>
                        ' ' + ganre.name
                    )}
                </p>
                <p>Год выпуска: {data.year}</p>
                <div className={classes.buttons}>
                    <Button onClick={() => router(`/movie/${data.id}`)}>Подробнее</Button>
                    {/*<Button href={"https://www.kinopoisk.ru/film/" + data.id}>На кинопоиск</Button>*/}
                </div>
            </div>
        </div>
    );
};

export default Card;