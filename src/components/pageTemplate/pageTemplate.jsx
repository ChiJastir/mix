import React from 'react';
import Header from "./header/header";
import Search from "./searchAndFilters/search";
import classes from  './pageTemplate.module.css'
import Content from "./content/content";

const PageTemplate = ({children, loadMoviesSinglePage, setContentType}) => {
    return (
        <div className={classes.template}>
            <Header setContentType={setContentType} className={classes.header}/>
            <Search loadMoviesSinglePage={loadMoviesSinglePage} className={classes.searchAndFilter}/>
            <Content className={classes.content}>
                {children}
            </Content>
        </div>
    );
};

export default PageTemplate;