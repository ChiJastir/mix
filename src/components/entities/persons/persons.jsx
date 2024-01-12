import React from 'react';
import classes from './persons.module.scss'
import {Link} from "react-router-dom";

const Persons = ({persons}) => {
    const professions = ['актеры', 'композиторы', 'художники', 'режиссеры', 'монтажеры', 'операторы', 'продюсеры', 'актеры дубляжа', 'редакторы']
    return (
        <div className={classes.persons}>
            <h3>Люди</h3>
            <ul>
                {professions.map((profession, index) =>
                    persons.filter(el => el.profession === profession)[0] &&
                    <li key={index}>
                        <span>{profession}: </span>
                        {persons.filter(el => el.profession === profession).map((person, ind) =>
                            person.name &&
                            <Link key={ind} to={'/person/' + person.id}>
                                {person !== persons.filter(el => el.profession === profession)[persons.filter(el => el.profession === profession).length - 1] ? person.name + ', ' : person.name}
                            </Link>)
                        }
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Persons;