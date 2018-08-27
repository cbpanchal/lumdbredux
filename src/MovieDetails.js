import React, { PureComponent } from 'react';
import { POSTER } from './Movie';
import Overdrive from 'react-overdrive';
import styled from 'styled-components';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'  
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'  

class MovieDetails extends PureComponent {

    state = {
        movie: {},
    }
    
    async componentDidMount() {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=f8ad7203c08a01ce5afff9d9539ff79b&language=en-US`);
            const movie = await res.json();
            this.setState({
                movie,
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { movie } = this.state;

        return (
            <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
                <MovieInfo>
                    <div>
                        <Overdrive id={movie.id}>
                            <POSTER src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
                        </Overdrive>
                        {/* { movie.title ? (
                          <h1>Hello</h1>
                        ) : (
                          <h1>Hii</h1>
                        )} */}
                        <h1>{movie.title}</h1>
                        <h1>{movie.release_date}</h1>
                        <h1>{movie.overview}</h1>
                    </div>
                </MovieInfo>
            </MovieWrapper>
        );
    }
}

const MovieWrapper = styled.div`
    position: relative;
    padding-top: 50vh;
    background: url(${props => props.backdrop}) no-repeat;
    background-size: cover;
`;

const MovieInfo = styled.div`
    background: white;
    text-align: left;
    padding: 2rem 10%;
    display: flex;
    > div {
        margin-left: 20px;
    }
    img {
        position: relative;
        top: -5rem;
    }
`;

export default MovieDetails;
