import React from 'react';
import {useNavigate} from 'react-router-dom'
import classes from './card.module.scss'
import { ReactComponent as Star } from '../../assets/star.svg'
import undefinedPoster from '../../assets/null-poster.png'
import Button from "../../UI/button/button";

const Card = ({data}) => {
    const router = useNavigate()
    return (
        <div className={classes.card}>
            <img className={classes.poster} src={data.poster ? data.poster.url : undefinedPoster} alt="poster"/>
            <div className={classes.cardBody}>
                <div className={classes.stars}>
                    <Star/>
                    <p>{Number((data.rating.kp).toFixed(1)) + '/10'}</p>
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
                <Button onClick={() => router(`/movie/${data.id}`)}>Подробнее</Button>
            </div>
        </div>
    );
};

export default Card;