import './App.css';
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieComponent from "./components/MovieComponent";
import { InputAdornment, TextField, Box } from '@mui/material';
import { Link } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
require('dotenv').config()


function App() {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(false);

  const fetchMovies = event => {
    if (!error) {
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
      <Header>
        <AppName onClick={() => window.location.reload()}>
          <span>OMDB Movie Search</span>
        </AppName>
        <div>
          <LinkWrapper href="https://github.com/hudsonmcmanus" target="_blank" sx={{ m: 20 }}>
            <Github sx={{ color: "white" }} fontSize="large" />
          </LinkWrapper>
          <LinkWrapper href="https://www.linkedin.com/in/hudsonmcmanus/" target="_blank" sx={{ m: 20 }}>
            <LinkedIn
              sx={{ color: "white" }} fontSize="large" />
          </LinkWrapper>
        </div>


      </Header>

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
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
            />
          ))
        ) : error ? (
          <div>
            <h3 style={{ color: 'rgb(229 59 59)' }}>
              Looks like Your OMDB api key is invalid, Check the project README for more information
            </h3>
          </div>
        ) : (
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

const AppName = styled.div`
  cursor: pointer;
  color: #ccc;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  content: "hello";

  &:hover {
    color: rgb(26, 29, 41);
  };
  @media (max-width: 768px) {
     span {
      display: none;
    };
     &:after {
      content: 'Moive Search';
    };
  };
`;

const Header = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #090b13ed;
  color: #ccc;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  font-size: 25px;
  font-weight: bold;
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

const LinkWrapper = styled(Link)`
  margin-right: 50px !important;
  
  @media (max-width: 768px) {
    margin-right: 25px !important;
  }`;

const Github = styled(GitHubIcon)`
  &:hover {
      color: rgb(26, 29, 41);
  }`;

const LinkedIn = styled(LinkedInIcon)`

  &:hover {
      color: rgb(26, 29, 41);
  }`;

export default App;
