import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/mainPage";
import CinemasPage from "./pages/cinemasPage/cinemasPage";
import classes from "./pages/cinemasPage/cinemasPage.module.scss";
import Header from "./components/header/header";
import React, {useState} from "react";
import SingleMoviePage from "./pages/singleMoviePage/singleMoviePage";
import PersonPage from "./pages/personPage/personPage";

function App() {
    return (
        <BrowserRouter>
            <div className={"container"}>
                <Header className={classes.header} setMovies movies/>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/movie" element={<CinemasPage/>} />
                    <Route path="/cartoon" element={<CinemasPage/>} />
                    <Route path="/anime" element={<CinemasPage/>} />
                    <Route path="/movie/:id" element={<SingleMoviePage/>} />
                    <Route path="/person/:id" element={<PersonPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
