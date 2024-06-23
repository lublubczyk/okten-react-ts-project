import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { useAppDispatch } from '../../hooks';
import { moviesActions } from "../../redux";
import style from './MoviesPage.module.css';


const MoviesPage = () => {
    
    const dispatch = useAppDispatch();
    const { search: page } = useLocation();

    useEffect(() => {
        dispatch(moviesActions.getAll(page));
    }, [dispatch, page]);

    return (
        <div className={style.MoviesPage}>
            <Outlet/>
        </div>
    )
};

export { MoviesPage };