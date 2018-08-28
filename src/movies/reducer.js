import { GET_MOVIES, GET_MOVIE, RESET_MOVIE } from './actions';

const initialState = {
    movies: [],
    moviesLoaded: false,
    movieLoadedAt: null,
    movie: {},
    movieLoaded: false,
};

export default function (state  = initialState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_MOVIES: 
            return {
                ...state,
                movies: data,
                moviesLoaded: true,
                movieLoadedAt: new Date(),
            };
        case GET_MOVIE: 
            return {
                ...state,
                movie: data,
                movieLoaded: true,
            };
        case RESET_MOVIE: 
            return {
                ...state,
                movie: {},
                movieLoaded: false,
            };
        default:
           return state;
    }
};