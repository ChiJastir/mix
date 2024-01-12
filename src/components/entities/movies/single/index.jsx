import React from 'react';
import classes from "../../../../pages/singlePage.module.scss";
import Loader from "../../../../UI/loader/loader";
import undefinedPoster from "../../../../assets/null-poster.png";
import localClasses from "../../../../pages/singleMoviePage/singleMoviePage.module.scss";
import Details from "./details";

const Index = ({ movie, loading }) => {
    return (
        <div className={classes.content}>
            {loading
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
                            <Details movie={movie}/>
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

export default Index;