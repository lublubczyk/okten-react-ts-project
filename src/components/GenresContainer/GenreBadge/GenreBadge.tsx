import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { IGenre } from "../../../interfaces";
import { useAppSelector } from "../../../hooks";

import style from './GenreBadge.module.css';

interface IProps { genre: IGenre };

const GenreBadge:FC<IProps> = ({genre: {id, name}}) => {
    
    const {id: paramsId} = useParams();
    const navigate = useNavigate();
    const { themeTrigger } = useAppSelector(state => state.themeTrigger);

    const themeStyle = themeTrigger ? `${style.GenreBadge} ${style.Dark}` : style.GenreBadge;
    const themeStyleIsActive = id === +paramsId ? `${themeStyle} ${style.Active}` : themeStyle;   
    
    const showMovies = () => {
        navigate(`/genre/${id}/movies?page=1`);
    }

    return (
        <div className={themeStyleIsActive} onClick={showMovies}>
            <span>{name}</span>
        </div>
    )
};

export { GenreBadge };