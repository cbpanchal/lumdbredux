import React, { PureComponent } from 'react';
import Movie from './Movie';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { getMovies } from './actions';

class MoviesList extends PureComponent {
 
    componentDidMount() { 
        const { getMovies, isLoaded, movieLoadedAt } = this.props; 
        const oneHour = 60 * 60 * 1000;
        //console.log(new Date() - new Date(movieLoadedAt));
        if(!isLoaded || ((new Date()) - new Date(movieLoadedAt)) > oneHour) {
            getMovies();
        }
        //this.props.getMovies();
    }

    render() {
        const { movies, isLoaded } = this.props;
        if(!isLoaded) return <h1>Loading</h1>
        return (
        <MovieGrid>
            {movies.map(movie => <Movie key= {movie.id} movie={movie}/>)}
        </MovieGrid>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies.movies,
    isLoaded: state.movies.moviesLoaded,
    movieLoadedAt: state.movies.movieLoadedAt,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getMovies
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1rem;
`;