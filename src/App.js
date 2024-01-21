import { useEffect } from "react";

// 8025b21b

const API_URL = 'http://www.omdbapi.com?apikey=8025b21b';

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
    <h1>this is from App</h1>
  );
}

export default App;