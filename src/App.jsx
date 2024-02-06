import './App.scss';
import {BrowserRouter, Route, Routes, Redirect} from "react-router-dom";
import MainPage from "./pages/mainPage/mainPage";
import CinemasPage from "./pages/cinemasPage/cinemasPage";
import classes from "./pages/cinemasPage/cinemasPage.module.scss";
import Header from "./components/header/header";
import React, {useState} from "react";
import SingleMoviePage from "./pages/singleMoviePage/singleMoviePage";
import PersonPage from "./pages/personPage/personPage";
import Navigation from "./components/navigation/navigation";
import {setList} from "./store/slices/moviesSlice";
import Search from "./components/searchAndFilters/search";
import MobileSearch from "./UI/buttonSearch/buttonSearch";
import {useDispatch} from "react-redux";
import {useResize} from "./hooks/useResize";
import {MissingRoute} from "./pages/MissingPage";

function App() {
    const dispatch = useDispatch()

    const width = useResize()

    return (
        <BrowserRouter>
            <Header className={classes.header} setMovies movies/>
            <div className={"container"}>
                {width > 850
                    ? <Navigation onClick={() => dispatch(setList([]))}>
                        <Search/>
                    </Navigation>
                    : <MobileSearch>Показать</MobileSearch>
                }
                <Routes>
                    {/*<Route path="/" element={<MainPage/>}/>*/}
                    <Route path="/movie" element={<CinemasPage/>}/>
                    <Route path="/cartoon" element={<CinemasPage/>}/>
                    <Route path="/anime" element={<CinemasPage/>}/>
                    <Route path="/movie/:id" element={<SingleMoviePage/>}/>
                    <Route path="/random" element={<SingleMoviePage/>}/>
                    <Route path="/person/:id" element={<PersonPage/>}/>
                    <Route path="*" element={<MissingRoute/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
