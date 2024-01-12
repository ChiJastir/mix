import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFething";
import gets from "../../API/gets";
import classes from '../singlePage.module.scss'
import Loader from "../../UI/loader/loader";
import undefinedPhotoPerson from "../../assets/nullPhotoPerson.png";
import {date, joinObject} from "../../utils/utils";
import Button from "../../UI/button/button";
import ModalWindow from "../../UI/modalWindow/modalWindow";
import Facts from "../../components/facts/facts";
import PersonMovies from "../../components/entities/persons/movies/personMovies";
import ButtonLink from "../../UI/buttonLink/buttonLink";

const PersonPage = () => {
    const params = useParams()
    const [person, setPerson] = useState([])

    const [visibleMovies, setVisibleMovies] = useState(false)
    const [visibleFacts, setVisibleFacts] = useState(false)

    const [fetching, isLoading] = useFetching(async () => {
        const response = await gets.getPersonById(params.id)
        setPerson(response.data)
    })

    useEffect(() => {
        fetching()
    }, [])

    return (
        <div className={classes.content}>
            {isLoading
                ? <div className={classes.loader}><Loader/></div>
                : <div>
                    <div className={classes.container}>
                        {person.photo
                            ? <img className={classes.photo} src={person.photo} alt="poster"/>
                            : <img className={classes.photo} src={undefinedPhotoPerson} alt="poster"/>
                        }
                        <div className={classes.info}>
                            <div>
                                <h1 className={classes.name}>{person.name}</h1>
                                <h2 className={classes.enName}>{person.enName}</h2>
                            </div>
                            <div className={classes.detailedInfo}>
                                <ul>
                                    {person.sex && <li><span>Пол: </span>{person.sex}</li>}
                                    {person.age && <li><span>Возраст: </span>{person.age}</li>}
                                    {person.growth && <li><span>Рост: </span>{person.growth}</li>}
                                    {person.profession && <li><span>Профессии: </span>{joinObject(person.profession)}</li>}
                                    {person.birthday && <li><span>Дата рождения: </span>{date(person.birthday)}</li>}
                                    {person.birthPlace && <li><span>Место рождения: </span>{joinObject(person.birthPlace)}</li>}
                                    <li><span>Всего фильмов: </span>{person.movies.length}</li>
                                </ul>
                                <div className={classes.buttons}>
                                    <Button onClick={() => setVisibleMovies(true)}>Фильмы</Button>
                                    <ModalWindow
                                        visible={visibleMovies}
                                        setVisible={setVisibleMovies}
                                    >
                                        <PersonMovies movies={person.movies}/>
                                    </ModalWindow>
                                    {Object.values(person.facts).length !== 0 && <div>
                                        <Button onClick={() => setVisibleFacts(true)}>Факты</Button>
                                        <ModalWindow
                                            visible={visibleFacts}
                                            setVisible={setVisibleFacts}
                                        >
                                            <Facts facts={person.facts}/>
                                        </ModalWindow>
                                    </div>}
                                    <ButtonLink href={"https://www.kinopoisk.ru/name/" + person.id}>На кинопоиск</ButtonLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default PersonPage;