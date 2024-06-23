import { IGenreParams, ISearchParams } from "../interfaces";

const baseURL = {
    movies: 'https://api.themoviedb.org/3/',
    poster: 'https://image.tmdb.org/t/p/w500/'
};

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGE4MzBjOTAwYmE1YTU4NDRlZGQyMDc1N2I0MGY5MyIsInN1YiI6IjY1NGEwNjJjNmJlYWVhMDE0YjY5OTM3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eCzrzyaD0JsA2A9iGP-7aJ_2lY1Ks-pwL8fGoJ8ZQ1M';

const urls = {
    allMovies: 'discover/movie',
    movieInfo: 'movie/',
    allGenres: 'genre/movie/list',
    allGenreMovies: (params: IGenreParams) => `genre/${params.id}/movies${params.page}`,
    searchMovie: (params:ISearchParams) => `search/movie?query=${params.query}&${params.page}`
};

export { baseURL, token, urls };