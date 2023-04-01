import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/mainPage";
import MoviePage from "./pages/moviePage/moviePage";
import classes from "./pages/moviePage/movie.module.css";
import Header from "./components/header/header";
import React from "react";
import SingleMoviePage from "./pages/singleMoviePage/singleMoviePage";

function App() {
  return (
    <BrowserRouter>
        <div className={"container"}>
            <Header className={classes.header}/>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/catalog" element={<MoviePage/>} />
                <Route path="/movie/:id" element={<SingleMoviePage/>} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
