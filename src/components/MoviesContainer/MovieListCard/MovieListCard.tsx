import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { IMovie } from "../../../interfaces";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { PosterPreview } from "../PosterPreview";
import { StarsRating } from "../StarsRating";
import { movieInfoActions } from "../../../redux";
import style from './MovieListCard.module.css';

interface IProps { movie: IMovie };

const MovieListCard: FC<IProps> = ({movie}) => {
    
    const { id, title, vote_average, poster_path } = movie;
    const { themeTrigger } = useAppSelector(state => state.themeTrigger);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const themeStyle = themeTrigger ? `${style.MovieListCard} ${style.Dark}` : style.MovieListCard;
    const getInfo = async () => {
        await dispatch(movieInfoActions.getMovieInfo(id));
        navigate(`info?${id}`);
    }

    return (
        <div className={themeStyle} onClick={getInfo}>
            <PosterPreview posterPath={poster_path} />
            <div>{title}</div>
            <StarsRating voteAverage={vote_average} />
        </div>
    )
};

export { MovieListCard };