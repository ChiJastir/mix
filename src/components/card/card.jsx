import React from 'react';
import classes from './card.module.css'
import ButtonLink from "../../UI/buttonLink/buttonLink";
import star from '../../img/star.svg'
import {stringLengthLimit} from "../../utils/utils";

const Card = ({data}) => {

    return (
        <div className={classes.card}>
            <img className={classes.poster} src={data.poster.url} alt="poster"/>
            <div className={classes.cardBody}>
                <div className={classes.stars}>
                    <img className={classes.star} src={star} alt="star"/>
                    <p className={classes.rating}>{Number((data.rating.kp).toFixed(1)) + '/10'}</p>
                </div>
                <h3 className={classes.heading}>{data.name}</h3>
                <p className={classes.description}>{stringLengthLimit(data.description, 500)}</p>
                <p className={classes.genre}>
                    Жанры:
                    {data.genres.map(ganre =>
                        ' ' + ganre.name
                    )}
                </p>
                <p>Год выпуска: {data.year}</p>
                <div className={classes.buttons}>
                    <ButtonLink href={"https://www.kinopoisk.ru/film/" + data.id}>На кинопоиск</ButtonLink>
                    {/*<ButtonLink href={data.videos.trailers[0].url}>Трейлер</ButtonLink>*/}
                </div>
            </div>
        </div>
    );
};

export default Card;