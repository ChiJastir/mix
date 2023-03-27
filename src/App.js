import './App.css';
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage";
import MoviePage from "./pages/moviePage/moviePage";

function App() {
  async function Get(){
    const response = await axios.get('/v1/movie/random', {
      headers:{
        "X-API-KEY": "PPGDBVZ-4SY4Q6B-MVRZ8DN-FGDCK4Q"
      }
    })
    console.log(response)
  }

  // useEffect(() => Get, [])

  return (
    <BrowserRouter>
      <div className={"container"}>
        <Routes>
          <Route path="/" element={<MoviePage/>} />
          <Route path="/main" element={<MainPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
