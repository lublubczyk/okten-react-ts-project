import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { GenresList } from "../GenresContainer";
import { genresActions } from "../../redux";
import style from './SideBar.module.css';

const SideBar = () => {

    const dispatch = useAppDispatch();
    const { genres, errors, isLoading } = useAppSelector(state => state.genres);

    useEffect(() => {
        if (!genres) dispatch(genresActions.getGenres());
    }, [genres, dispatch]);

    return (
        <div className={style.SideBar}>
            <h2>Genres</h2> 
            {isLoading && <h2>Loading...</h2>}
            {errors && <h3>{errors.status_message } Something went wrong!</h3>}
            { genres && <GenresList genres={genres.genres} />}
        </div>
    )
};

export { SideBar };