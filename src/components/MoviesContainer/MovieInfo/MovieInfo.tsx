import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { IGenre } from "../../../interfaces";
import { PosterPreview } from "../PosterPreview";
import { RatingStars } from "../RatingStars";
import { movieInfoActions } from "../../../redux";
import style from './MovieInfo.module.css';

const MovieInfo = () => {

    const dispatch = useAppDispatch();
    const {search: id } = useLocation();
    const { themeTrigger } = useAppSelector(state => state.themeTrigger);
    const { movieInfo, isLoading, errors } = useAppSelector(state => state.moviesInfo);

    const themeStyle = themeTrigger ? `${style.InfoContainer} ${style.Dark}` : style.InfoContainer;
    
    useEffect(() => {
        if (!movieInfo) dispatch(movieInfoActions.getMovieInfo(+id.slice(1)))
    });

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {errors && <h1>{errors.status_message} Something went wrong!</h1>}
            {movieInfo && <div className={style.MovieInfo}>
                <div>
                    <PosterPreview posterPath={movieInfo.poster_path } />
                </div>
                <div className={themeStyle}>
                    <h1>{movieInfo.title}</h1>
                    <RatingStars voteAverage={movieInfo.vote_average} />
                    <h3>Release date: {movieInfo.release_date}</h3>
                    <h3>Runtime: {movieInfo.runtime}</h3>
                    <h3>Genres:</h3>
                    <div className={style.Genres}>
                        {movieInfo.genres.map((genre:IGenre) => <h2 key={genre.id} >{genre.name}</h2>)}
                    </div>
                    <h3>Overview:</h3>
                    <p>{movieInfo.overview}</p>

                </div>
            </div>}
        </div>
    )
};

export { MovieInfo };