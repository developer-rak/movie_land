import { useEffect } from "react";

import './App.css';
import searchIcon from './search.svg';

// 8025b21b

const API_URL = 'http://www.omdbapi.com?apikey=8025b21b';

const movie1 = {
  "Title": "Spiderman in Cannes",
  "Year": "2016",
  "imdbID": "tt5978586",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
}

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MoviesLand</h1>

      <div className="search">
        <input 
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
          />

        <img 
          src={searchIcon} 
          alt="search" 
          onChange={() => {}}
        />
      </div>

      <div className="container">
        
      </div>
    </div>
  );
}

export default App;