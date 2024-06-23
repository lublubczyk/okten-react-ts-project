import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { IGenre } from "../../../interfaces";
import { useAppSelector } from "../../../hooks";

import style from './GenreBadge.module.css';

interface IProps { genre: IGenre };

const GenreBadge:FC<IProps> = ({genre: {id, name}}) => {
    
    const navigate = useNavigate();
    const { themeTrigger } = useAppSelector(state => state.themeTrigger);

    const themeStyle = themeTrigger ? `${style.GenreBadge} ${style.Dark}` : style.GenreBadge;
       
    const showMovies =  () => {
        navigate(`/genre/${id}/movies?page=1`);
    }

    return (
        <div className={themeStyle} onClick={showMovies}>
            <span>{name}</span>
        </div>
    )
};

export { GenreBadge };