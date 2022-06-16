import './App.css';
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieComponent from "./components/MovieComponent";
import { InputAdornment, TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {Header} from './components/Header'
require('dotenv').config()


function App() {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(false);

  const fetchMovies = event => {
    if (!error) {
      // Send api request every 300ms while typing
      setTimeout(() => {
        axios
          .get(`https://www.omdbapi.com/?type=movie&i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&s=${event.target.value.trim()}`)
          .then((res) => {
            (res.data.Search ? setMovieList([...res.data.Search]) : setMovieList([]))
          }).catch((error) => {
            setError(true);
          });
      }, 300)
    }
  }

  return (
    <Container>
      <Header/>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ m: 5, mt: 15 }}
      ><TextFieldWrapper
          onChange={fetchMovies}
          placeholder='Search Movies!'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="large" />
              </InputAdornment>
            ),
          }}
          sx={{ input: { color: '#ccc', width: 400, height: 50, fontSize: 25 } }}
        /></Box>

      <MovieListContainer>
        {movieList.length ? (
          // Map each movie to a MovieComponent
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
            />
          ))
        ) : error ? (
          // If api key is invalid display message to user
          <div>
            <h3 style={{ color: 'rgb(229 59 59)' }}>
              Looks like Your OMDB api key is invalid, Check the project README for more information
            </h3>
          </div>
        ) : (
          // No results message
          <div>
            <h3 style={{ color: 'rgb(98 100 107)' }}>
              No results with that search
            </h3>
          </div>
        )}
      </MovieListContainer>
    </Container>


  );
}

const TextFieldWrapper = styled(TextField)`
  fieldset {
    border-radius: 40px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieListContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  gap: 25px;
  justify-content: center;
`;

export default App;
