import React from 'react';
import Button from "../../UI/button/button";
import classes from './personMovies.module.scss'
import star from "../../assets/star.svg";
import {useNavigate} from "react-router-dom";

const PersonMovies = ({movies}) => {
    const router = useNavigate()

    return (
        <div>
            <h3>Фильмы</h3>
            {movies.map((movie, indix) =>
                movie.name && <div key={indix} className={classes.movie}>
                    <div>
                        <h4>{movie.name}</h4>
                        <div className={classes.stars}>
                            <img className={classes.star} src={star} alt="star"/>
                            {movie.rating
                                ? <p className={classes.rating}>{movie.rating + '/10'}</p>
                                : <p className={classes.rating}>Не известен</p>
                            }
                        </div>
                    </div>
                    <Button onClick={() => router(`/movie/${movie.id}`)}>Перейти</Button>
                </div>
            )}
        </div>
    );
};

export default PersonMovies;