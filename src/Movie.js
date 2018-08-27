import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';
import styled from 'styled-components';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'  

const Movie = ({ movie }) => (
  <Link to={`${movie.id}`}>
    <Overdrive id={movie.id}>
      <POSTER src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
    </Overdrive>
  </Link>
);

export default Movie;

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired,
} 

export const POSTER = styled.img`
  box-shadow: 0 0 35px black;
`;