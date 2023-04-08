import React from 'react';
import classes from './facts.module.css'

const Facts = ({facts}) => {
    return (
        <div className={classes.facts}>
            <h3>Забавные факты</h3>
            <ul>
                {facts.map((fact, index) => {
                    const aTags = fact.value.match(/<a.*?\/a>/g)
                    let aText = []
                    let text = fact.value
                    aTags && aTags.map((aTag, index) => {
                        aText.push(aTag.match(/>(.*?)</)[1])
                        text = text.split(aTag).join(aText[index])
                    })
                    return <li key={index} dangerouslySetInnerHTML={{__html: text}}></li>
                })}
            </ul>
        </div>
    );
};

export default Facts;