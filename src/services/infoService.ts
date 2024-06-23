import { urls } from "../constants";
import { IGenres, IMovieInfo } from "../interfaces";
import { IRes } from "../types";
import { axiosService } from "./axiosService";


const infoService = {
    getGenres: (): IRes<IGenres> => axiosService.get(urls.allGenres),
    getMovieInfo: (id: number): IRes<IMovieInfo> => axiosService.get(urls.movieInfo + id)
};

export { infoService };