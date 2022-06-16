import React from "react";
import Card from "@material-ui/core/Card";
import Button from '@mui/material/Button';
import styled from "styled-components";
import { CardActions, Typography } from "@mui/material";

const MovieComponent = (props) => {
    const { Title, Year, Poster } = props.movie;


    return (
        <MovieCard variant="outlined">
            {Poster !== "N/A" ? (
                <MoviePoster src={Poster} alt="poster" />
            ) : (
                <MoviePoster src={"https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"} alt="poster" />
            )
            }
            <Tag>
                {Year}
            </Tag>
            <Typography gutterBottom variant="h5" component="div" align="center">
                {Title}
            </Typography>
            <CardActions style={{ justifyContent: 'center' }}>
                <Button size="large" color="primary" variant="contained" >
                    See More
                </Button>
            </CardActions>
        </MovieCard>
    );
};

const MoviePoster = styled.img`
width: 360px;
height: 480px;
`

const MovieCard = styled(Card)`
position: relative;
height: auto !important;
border: 2px solid #101010 !important;
border-radius: 10px !important;
color: #ccc !important;
background-color: rgb(96 96 96 / 18%) !important;
width: 350px;
margin: 5px;
float: left;
transition: transform 1.2s;
&:hover {
    background-color: #101010 !important;
    transform: scale(1.02);
}
`

const Tag = styled.span`
width: fit-content;
text-align: center;
color: #ccc;
background-color: #090b13 !important;
right: 5px;
border-radius: 10px;
font-size: 22px;
font-weight: 600;
margin: auto;
top: 5px;
letter-spacing: 1px;
padding: 5px 10px 5px 10px;
position: absolute;
`
export default MovieComponent;