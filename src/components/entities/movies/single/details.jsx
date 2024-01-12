import React, {useState} from 'react';
import {addingSpacesInMoney, joinObject, movieLengthInHour} from "../../../../utils/utils";
import classes from './movie-single.module.scss'

import _ from "lodash";
import Button from "../../../../UI/button/button";
import ModalWindow from "../../../../UI/modalWindow/modalWindow";
import Persons from "../../persons/persons";

const Details = ({ movie }) => {

    const [visibleMans, setVisibleMans] = useState(false)

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
        if(!value)
            return null

        const result = [addingSpacesInMoney(value)]
        if(currency) result.push(currency)

        return result.join(' ')
    }

    function movieDetails(){

        const details = []

        allDetails.forEach(detail => {

            // Get value
            let value = _.get(movie, detail.key)
            if(!value)
                return;

            // Formatter
            if(detail.formatter) {
                value = detail.formatter(value)
                if (!value)
                    return;
            }

            details.push({
                title: detail.title,
                value
            })
        })

        return details
    }

    return (
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
    );
};

export default Details;