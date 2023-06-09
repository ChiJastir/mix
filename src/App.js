import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/mainPage";
import MoviesPage from "./pages/moviePage/moviesPage";
import classes from "./pages/moviePage/moviesPage.module.css";
import Header from "./components/header/header";
import React from "react";
import SingleMoviePage from "./pages/singleMoviePage/singleMoviePage";
import PersonPage from "./pages/personPage/personPage";

function App() {
  return (
    <BrowserRouter>
        <div className={"container"}>
            <Header className={classes.header}/>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/movies" element={<MoviesPage/>} />
                <Route path="/movie/:id" element={<SingleMoviePage/>} />
                <Route path="/person/:id" element={<PersonPage/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
