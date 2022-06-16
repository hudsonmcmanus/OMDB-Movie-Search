import React from "react";
import Card from "@material-ui/core/Card";
import Button from '@mui/material/Button';
import styled from "styled-components";
import { CardActions, Typography } from "@mui/material";

const MovieComponent = (props) => {
    const { Title, Year, Poster } = props.movie;


    return (
            <Card className="movieCard" variant="outlined">
                {Poster !== "N/A" ? (
                    <img className="moviePoster" src={Poster} alt="poster" />
                ) : (
                    <img className="moviePoster" src={"https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"} alt="poster" />
                )
                }
                <Tag>
                    {Year}
                </Tag>
                <Typography gutterBottom variant="h5" component="div" align="center">
                    {Title}
                </Typography>
                <CardActions style={{justifyContent: 'center'}}>
                    <Button size="large" color="primary" variant="contained" >
                        See More
                    </Button>
                </CardActions>


            </Card>
    );
};
export default MovieComponent;

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