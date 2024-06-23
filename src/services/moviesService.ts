import { urls } from "../constants";
import { IGenreParams, IMovies, ISearchParams } from "../interfaces";
import { IRes } from "../types";
import { axiosService } from "./axiosService";

const moviesService = {
    getAllMovies: (page = '?page=1'): IRes<IMovies> => axiosService.get(urls.allMovies + page),
    getGenreMovies: (params: IGenreParams): IRes<IMovies> => axiosService.get(urls.allGenreMovies(params)),
    searchMovie: (params: ISearchParams): IRes<IMovies> => axiosService.get(urls.searchMovie(params))
};

export { moviesService };