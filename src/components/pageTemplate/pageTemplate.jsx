import React from 'react';
import Header from "./header/header";
import Search from "./searchAndFilters/search";
import classes from  './pageTemplate.module.css'
import Content from "./content/content";

const PageTemplate = ({children, setContentType, setSearch, setFilter, setYear, setGenre}) => {
    return (
        <div className={classes.template}>
            <Header className={classes.header}/>
            <Search
                setYear={setYear}
                setContentType={setContentType}
                setFilter={setFilter}
                setSearch={setSearch}
                className={classes.searchAndFilter}
                setGenre={setGenre}
            />
            <Content className={classes.content}>
                {children}
            </Content>
        </div>
    );
};

export default PageTemplate;