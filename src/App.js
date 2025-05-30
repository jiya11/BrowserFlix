import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=9778f044240d10b26a4494019da0736b`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setSearchResults(data.results)
        })
    }
  }, [searchText])

  // console.log(searchText, "si the default");
  // setTimeout(() => {
  //   setSearchText("New text");
  //   console.log(searchText, "is the new text");

  // }, 2000)

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" element={<MovieView />} />
      </Routes>
    </div>
  );
}

export default App;